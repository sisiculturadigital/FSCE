import React from 'react';
import { useState, useEffect } from 'react';
import escudo from "../../imgs/Layout/NavBar/escudo.png"
import { Link } from 'react-router-dom';
import arrow from "../../imgs/Layout/NavBar/arrow.svg"

const Header = () => {

    const [open, setOpen] = useState(false)


    function openMenu(){
        setOpen(!open)
        // document.querySelector('.header-navbar').classList.toggle('open')
    }

    function cerrarMenu(e){
        setOpen(false)
        document.querySelector('.header-navbar').classList.remove('open')
    }

    open ? document.body.classList.add('hide') : document.body.classList.remove('hide')


  return (
    <div className='header'>
        <div className='header-wrapper'>
         
            <Link to={"/"}  onClick={cerrarMenu} className='escudo'>
                <figure>
                    <img src={escudo} alt={"escudo"} />
                </figure>
            </Link>

            <span>
                FSCE
            </span>

            <div className='triangulo'></div>
            <div className='rectangulo'></div>
            
            <div className='nav-toggle-container'>
                <button className="nav-toggle" aria-label="Abrir menú" onClick={openMenu}>
                    <i className="fa-solid fa-bars"></i>
                </button>
            </div>
      

            <div className= {`header-navbar ${open ? 'open': ''}`}> 
        
                <div className='line'></div>
                <Link to='/' className='nav' id='nav_inicio' onClick={cerrarMenu}>
                    Inicio
                </Link>
                
                <Link to='/institucional' className='nav'  onClick={cerrarMenu} >
                    Institucional <img src={arrow} className='img_arrow' alt="flecha" />
                </Link>
                
                <Link to='/beneficios' className='nav' onClick={cerrarMenu}>
                    Beneficios <img src={arrow} className='img_arrow' alt="flecha" />
                </Link>
                
                <Link className='nav' onClick={cerrarMenu}>
                    Transparencia <img src={arrow} className='img_arrow' alt="flecha" />
                </Link>
                
                <Link to='/descargas' className='nav'onClick={cerrarMenu}>
                    Descargas <img src={arrow} className='img_arrow' alt="flecha" />
                </Link>
                
                <Link to="/contacto" className='nav' onClick={cerrarMenu}>
                    Contacto <img src={arrow} className='img_arrow' alt="flecha" />
                </Link>
            </div>
                
     

            <Link to='/usuarios' className='nav-usuario' onClick={cerrarMenu}>
                Usuarios
            </Link>




        </div>
    </div>
  );
};

export default Header;