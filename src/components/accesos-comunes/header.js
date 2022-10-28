import React from 'react';
import { useState, useRef } from 'react';
import escudo from "../../imgs/escudo.png"
import { Link } from 'react-router-dom';


const Header = () => {

    const [open, setOpen] = useState(false)
    const header_navbar = useRef(null)
    
    function openMenu(){
        setOpen(!open)
        document.querySelector('.header-navbar').classList.toggle('open')
    }
    
    function cerrarMenu(){
        setOpen(false)
        document.querySelector('.header-navbar').classList.remove('open')
    }

  return (
    <div className='header'>
        <div className='header-wrapper'>
                <div className='header-img'>
                    <Link to={"/"}  onClick={cerrarMenu} >
                        <img src={escudo} alt={"escudo"} />
                    </Link>
                </div>

                <button class="nav-toggle" aria-label="Abrir menú" onClick={openMenu}>
                    <i class="fa-solid fa-bars"></i>
                </button>

                <div className= "header-navbar"
                    ref= {header_navbar}> 
                    <Link to='/' className='nav' onClick={cerrarMenu}>
                        Inicio
                    </Link>
                    <Link to='/institucional' className='nav'  onClick={cerrarMenu} >
                        Institucional
                    </Link>
                    
                    <Link to='/beneficios' className='nav' onClick={cerrarMenu}>
                        Beneficios
                    </Link>
                    
                    <Link className='nav' onClick={cerrarMenu}>
                        Transparencia
                    </Link>
                    
                    <Link className='nav'onClick={cerrarMenu}>
                        Descargas
                    </Link>
                    
                    <Link to="/contacto" className='nav' onClick={cerrarMenu}>
                        Contacto
                    </Link>

                    <Link to='/usuarios' className='rgb-rwr' onClick={cerrarMenu}>
                        Usuarios
                    </Link>
                    
                </div>
            </div>
    </div>
  );
};

export default Header;