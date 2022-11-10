import './styles/App.scss';

import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import WhattsApp from "./imgs/whatsapp.png"
// import { BsFillMoonStarsFill, BsFillBrightnessHighFill } from "react-icons/bs";


import Navbar from './components/Layout/navbar';
import Footer from './components/Layout/footer';
import Home from './components/Views/Home/home';
import Contacto from './components/Views/Contacto/contacto'; 
import Usuarios from './components/Views/Usuarios//usuarios';
import Descargas from './components/Views/Descargas/descargas';
import Registrate from './components/Views/Usuarios/registrate';
import CambiarContrasenia from './components/Views/Usuarios/CambiarContrasenia';
import Transparencia from './components/Views/Transparencia/transparencia';

import Institucional from './components/Views/Institucional/institucional';
import Mision from './components/Views/Institucional/vistas/Mision.js'
import Organizacion from './components/Views/Institucional/vistas/Organizacion.js'
import Noticias from './components/Views/Institucional/vistas/Noticias.js'


import Beneficios from './components/Views/Beneficios/beneficios';
import SubBeneficio from './components/Views/Beneficios/vistas/SubBeneficio.js'
import SegurosDeCesacion from './components/Views/Beneficios/vistas/SegurosDeCesacion.js'
import CartaDeclaratoria from './components/Views/Beneficios/vistas/CartaDeclaratoria.js'
import EjemploCalculo from './components/Views/Beneficios/vistas/EjemploCalculo.js'
import TramiteAdelanto from './components/Views/Beneficios/vistas/TramiteAdelanto.js'
import AdelantoBeneficios from './components/Views/Beneficios/vistas/AdelantoBeneficios.js'
import Actualizacion from './components/Views/Beneficios/vistas/Actualizacion.js'
import EjemploActualizacion from './components/Views/Beneficios/vistas/EjemploActualizacion.js'
import TramiteActualizacion from './components/Views/Beneficios/vistas/TramiteActualizacion.js'
import DevolucionAportes from './components/Views/Beneficios/vistas/DevolucionAportes.js'
import EjemploDevolucion from './components/Views/Beneficios/vistas/EjemploDevolucion.js'
import TramiteDevolucion from './components/Views/Beneficios/vistas/TramiteDevolucion.js'
import Inicio from './components/Views/Inicio/Inicio';
import ApoyoEconomico from './components/Views/Beneficios/vistas/ApoyoEconomico';
import { UserProvider } from './context/UserProvider';



function App() {
  var x = window.matchMedia("(max-width: 700px)")
  let navegador = navigator.userAgent;
  let isMobile;
  let isOrientationVertical;
  
  // eslint-disable-next-line no-unused-expressions
  (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i))?
    ( isMobile = true,
      window.orientation ===  0 ? isOrientationVertical = true : isOrientationVertical = false
    )
    :
    ( isMobile = false,
      window.orientation ===  0 ? isOrientationVertical = false : isOrientationVertical = true
    );
    // console.log(window.orientation , "si es 0 entonces False, si es 90 entonces True");

  // console.log('isOrientationVertical', isOrientationVertical);

  // alert(`window.innerWidth :: ${window.innerWidth} ; window.innerHeight :: ${window.innerHeight}`);


  //*******************Theme *******************

  // useEffect(() => {
  //   if (!localStorage.getItem('theme')) {
  //     localStorage.setItem('theme', 'light');
  //   }
  // }, []);

  // const theme = localStorage.getItem('theme');
  // const [currentTheme, setCurrentTheme] = useState(theme);

  // const setTheme = () => {
  //   if (currentTheme === 'light') {
  //     setCurrentTheme('dark');
  //     localStorage.setItem('theme', 'dark');
  //   } else {
  //     setCurrentTheme('light');
  //     localStorage.setItem('theme', 'light');
  //   };
  // };

  return (

    <UserProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path='/institucional/*' element={<Institucional />}>
            <Route path='mision' element={<Mision context={x.matches}/>} />
            <Route path='organizacion' element={<Organizacion context={x.matches}/>} />
            <Route path='noticias' element={<Noticias context={x.matches}/>} />
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
            <Route path='ApoyoEconomico' element={<ApoyoEconomico /> } />
          </Route>
          <Route path="/transparencia" element={<Transparencia />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path='/usuarios' element={<Usuarios />} />
          <Route path='/descargas' element={<Descargas />} />
          <Route path='/registrate' element={<Registrate/>} />
          <Route path='/cambiar-contrasenia' element={ <CambiarContrasenia /> } />

          <Route path='*' element={<Home /> } />
        </Routes>
        <Footer />
      </Router>
    </UserProvider>

  );
}

export default App;
