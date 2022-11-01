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
import Institucional from './components/Views/Institucional/institucional';
import Beneficios from './components/Views/Beneficios/beneficios';
import Descargas from './components/Views/Descargas/descargas';
import Registrate from './components/Views/Usuarios/registrate';

function App() {
  let navegador = navigator.userAgent;
  let isMobile;
  let isOrientationVertical = window.orientation === 0 ? false : true;

  const isOrientationVerticalFx = () => {
    isOrientationVertical = window.orientation === 0 ? false : true
  }
  
  // eslint-disable-next-line no-unused-expressions
  (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i))?
    ( isMobile = true,
      isOrientationVerticalFx()
    )
    :
    (isMobile = false);
    console.log(window.orientation , "si es 0 entonces False, si es 90 entonces True");

  window.addEventListener("orientationchange", function() {
    isOrientationVertical = window.orientation === 0 ? false : true;
  }, false)

  console.log('isOrientationVertical', isOrientationVertical);

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
        <Route exact path="/" element={<Home data={{isMobile, isOrientationVertical}}/>} />
        <Route path='/institucional' element={<Institucional />} />
        <Route path='/beneficios' element={<Beneficios />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path='/usuarios' element={<Usuarios />} />
        <Route path='/descargas' element={<Descargas />} />
        <Route path='/registrate' element={<Registrate/>} />
        {/* { estadoUsuarioVerificado === false ? null : <Route path='/registro' element={<NuevoUsuario />} />} */}

        <Route path='*' element={<Home /> } />
      </Routes>
      <Footer />

  </Router>

  );
}

export default App;
