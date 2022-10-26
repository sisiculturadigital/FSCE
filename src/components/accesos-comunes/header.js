import React from 'react';
import escudo from "../../imgs/escudo.png"
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <div className='header-wrapper'>
        <div className='header-img'>
            <Link to={"/"}>
                <img src={escudo} alt={"escudo"} />
            </Link>
        </div>
        <div className='header-navbar'>
            <Link to='/' className='nav'>
                Inicio
            </Link>
            <Link to='/institucional' className='nav'>
                Institucional
            </Link>
            
            <Link to='/beneficios' className='nav'>
                Beneficios
            </Link>
            
            <Link className='nav'>
                Transparencia
            </Link>
            
            <Link className='nav'>
                Descargas
            </Link>
            
            <Link to="/contacto" className='nav' >
                Contacto
            </Link>

            <Link to='/usuarios' className='rgb-rwr'>
                Usuarios
            </Link>
            
        </div>
    </div>
  );
};

export default Header;