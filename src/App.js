import './styles/App.scss';

import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { usuarioPermitidoState } from "./redux/usuarios/verificacionUsuarioSlice";

import WhattsApp from "./imgs/whatsapp.png"
import { BsFillMoonStarsFill, BsFillBrightnessHighFill } from "react-icons/bs";


import Navbar from './components/Layout/navbar';
import Footer from './components/Layout/footer';
import Home from './components/Views/Home/home';
import Contacto from './components/Views/Contacto/contacto'; 
import Usuarios from './components/Views/Usuarios//usuarios';
import NuevoUsuario from './components/forms/nuevoUsuario';
import Institucional from './components/Views/Institucional/institucional';
// import NotFound from './components/accesos-comunes/notFound';
import Beneficios from './components/Views/Beneficios/beneficios';
import Descargas from './components/Views/Descargas/descargas';
import Registrate from './components/Views/Usuarios/registrate';

function App() {

  useEffect(() => {
    if (!localStorage.getItem('theme')) {
      localStorage.setItem('theme', 'light');
    }
  }, []);

  
  const theme = localStorage.getItem('theme');

  const [currentTheme, setCurrentTheme] = useState(theme);

  const estadoUsuarioVerificado = useSelector(usuarioPermitidoState)

  const setTheme = () => {
    if (currentTheme === 'light') {
      setCurrentTheme('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      setCurrentTheme('light');
      localStorage.setItem('theme', 'light');
    };
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path='/institucional' element={<Institucional />} />
        <Route path='/beneficios' element={<Beneficios />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path='/usuarios' element={<Usuarios />} />
        <Route path='/descargas' element={<Descargas />} />
        <Route path='/registrate' element={<Registrate/>} />
        { estadoUsuarioVerificado === false ? null : <Route path='/registro' element={<NuevoUsuario />} />}

        <Route path='*' element={<Home /> } />
      </Routes>
      <Footer />

  </Router>

  );
}

export default App;
