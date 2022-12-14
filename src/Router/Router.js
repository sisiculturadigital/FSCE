import React from 'react'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import { ProtectedRoute } from './ProtectedRouter'

import Navbar from '../components/Layout/navbar';
import Footer from '../components/Layout/footer';
import Home from '../components/Views/Home/home';
import Contacto from '../components/Views/Contacto/contacto'; 
import Usuarios from '../components/Views/Usuarios//usuarios';
import Descargas from '../components/Views/Descargas/descargas';
import Registrate from '../components/Views/Usuarios/registrate';
import RecuperarContrasenia from '../components/Views/Usuarios/RecuperarContrasenia';
import Transparencia from '../components/Views/Transparencia/transparencia';

import Institucional from '../components/Views/Institucional/institucional';
import Mision from '../components/Views/Institucional/vistas/Mision.js'
import Organizacion from '../components/Views/Institucional/vistas/Organizacion.js'
import Noticias from '../components/Views/Institucional/vistas/Noticias.js'


import Beneficios from '../components/Views/Beneficios/beneficios';
import SubBeneficio from '../components/Views/Beneficios/vistas/SubBeneficio.js'
import SegurosDeCesacion from '../components/Views/Beneficios/vistas/SegurosDeCesacion.js'
import CartaDeclaratoria from '../components/Views/Beneficios/vistas/CartaDeclaratoria.js'
import EjemploCalculo from '../components/Views/Beneficios/vistas/EjemploCalculo.js'
import TramiteAdelanto from '../components/Views/Beneficios/vistas/TramiteAdelanto.js'
import AdelantoBeneficios from '../components/Views/Beneficios/vistas/AdelantoBeneficios.js'
import Actualizacion from '../components/Views/Beneficios/vistas/Actualizacion.js'
import EjemploActualizacion from '../components/Views/Beneficios/vistas/EjemploActualizacion.js'
import TramiteActualizacion from '../components/Views/Beneficios/vistas/TramiteActualizacion.js'
import DevolucionAportes from '../components/Views/Beneficios/vistas/DevolucionAportes.js'
import EjemploDevolucion from '../components/Views/Beneficios/vistas/EjemploDevolucion.js'
import TramiteDevolucion from '../components/Views/Beneficios/vistas/TramiteDevolucion.js'
import Inicio from '../components/Views/Inicio/Inicio';
import ApoyoEconomico from '../components/Views/Beneficios/ApoyoEconomico';
import { useUserContext } from '../context/UserProvider';

// Consulta , codRole : usuario Normal
import Pago from '../components/Views/Rol/Usuarios/Pago.js';
import Aportes from '../components/Views/Rol/Usuarios/Aportes.js';
import Saldo from '../components/Views/Rol/Usuarios/Saldo.js';
import RegistroDatos from '../components/Views/Rol/Administrador/RegistroDatos';
import RegistroDeDatos from '../components/Views/Rol/Administrador/RegistroDeDatos';
import ActualizarContrasenia from '../components/Views/ActualizarContrasenia/ActualizarContrasenia';

const Router = () => {
    
    const {user, isAuth}=useUserContext()

  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path='/registrate' element={!isAuth ? <Registrate/>: <Inicio />} />
            <Route path='/usuarios' element={!isAuth ? <Usuarios/> : <Inicio />} />
            <Route path='/recuperar-contrasenia' element={ <RecuperarContrasenia /> } />
            <Route path='/institucional/*' element={<Institucional />}>
                <Route path='mision' element={<Mision />} />
                <Route path='organizacion' element={<Organizacion />} />
                <Route path='noticias' element={<Noticias />} />
            </Route>
            <Route path='/beneficios/*' element={<Beneficios />}>
                <Route path='beneficios' element={<SubBeneficio />} />
                <Route path='SegurosDeCesacion' element={<SegurosDeCesacion />} />
                <Route path='CartaDeclaratoria' element={<CartaDeclaratoria />} />
                <Route path='EjemploCalculo' element={<EjemploCalculo />} />
                <Route path='TramiteAdelanto' element={<TramiteAdelanto />} />
                <Route path='AdelantoBeneficios' element={<AdelantoBeneficios />} />
                <Route path='Actualizacion' element={<Actualizacion />} />
                <Route path='EjemploActualizacion' element={<EjemploActualizacion />} />
                <Route path='TramiteActualizacion' element={<TramiteActualizacion />} />
                <Route path='DevolucionAportes' element={<DevolucionAportes />} />
                <Route path='EjemploDevolucion' element={<EjemploDevolucion />} />
                <Route path='TramiteDevolucion' element={<TramiteDevolucion />} />
            </Route>
            <Route path='/ApoyoEconomico' element={<ApoyoEconomico /> } />

            <Route element={<ProtectedRoute isAllowed={!!user} />}>
                <Route path="/transparencia" element={<Transparencia />} />
                <Route path="/inicio" element={<Inicio />} />
                <Route path="/registro-datos" element={<RegistroDatos />} />
                <Route path="/RegistroDeDatos" element={<RegistroDeDatos />} />
                <Route path='/descargas' element={<Descargas />} />
                <Route path='/pago' element={<Pago />} />
                <Route path='/aportes' element={<Aportes />} />
                <Route path='/saldo/' element={<Saldo />} />
                <Route path='/actualizar-contrasenia/' element={<ActualizarContrasenia />} />
            </Route>
            
            <Route path="/contacto" element={<Contacto />} />
            <Route path='*' element={<Home /> } />
        </Routes>
        <Footer />
    </BrowserRouter>
  )
}

export default Router