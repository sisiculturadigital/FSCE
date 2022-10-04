import './styles/App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import WhattsApp from "./imgs/whatsapp.png"


import Header from './components/accesos-comunes/header';
import Footer from './components/accesos-comunes/footer';
import Home from './components/accesos-comunes/home';
import Contacto from './components/forms/contacto'; 
import Usuarios from './components/forms/usuarios';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path='/usuarios' element={<Usuarios />} />
      </Routes>
      <Footer />
      <img className='WSimg' src={WhattsApp} alt="WhatsAppLogo" />
    </Router>

  );
}

export default App;
