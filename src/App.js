import './styles/App.scss';

import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { usuarioPermitidoState } from "./redux/usuarios/verificacionUsuarioSlice";

import WhattsApp from "./imgs/whatsapp.png"
import { BsFillMoonStarsFill, BsFillBrightnessHighFill } from "react-icons/bs";


import Header from './components/accesos-comunes/header';
import Footer from './components/accesos-comunes/footer';
import Home from './components/accesos-comunes/home';
import Contacto from './components/forms/contacto'; 
import Usuarios from './components/forms/usuarios';
import NuevoUsuario from './components/forms/nuevoUsuario';
import Institucional from './components/institucional';
import NotFound from './components/accesos-comunes/notFound';
import Beneficios from './components/beneficios';
import Descargas from './components/descargas';

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
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path='/institucional' element={<Institucional />} />
        <Route path='/beneficios' element={<Beneficios />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path='/usuarios' element={<Usuarios />} />
        <Route path='/descargas' element={<Descargas />} />

        { estadoUsuarioVerificado === false ? null : <Route path='/registro' element={<NuevoUsuario />} />}

        <Route path='*' element={<NotFound /> } />
      </Routes>
      <Footer />

      {/* { theme === 'light' 
      ? 
      <div className='them-icon' onClick={setTheme} ><BsFillMoonStarsFill /></div> 
      : 
      <div className='them-icon' onClick={setTheme}><BsFillBrightnessHighFill /></div> }
      
      <img className='WSimg' src={WhattsApp} alt="WhatsAppLogo" /> */}

  </Router>

  );
}

export default App;
