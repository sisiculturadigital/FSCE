import React from 'react';
import { useState, useEffect, useRef } from 'react';
import escudo from "../../imgs/Layout/NavBar/escudo.png"
import { Link } from 'react-router-dom';
import arrow from "../../imgs/Layout/NavBar/arrow.svg"
import { useUserContext } from '../../context/UserProvider';
import {FaUser} from 'react-icons/fa'
import { FaAngleDown } from 'react-icons/fa'



const Header = () => {

    const {user, setUser, isAuth}=useUserContext()

    const [open, setOpen] = useState(false)
    const [openLogin, setOpenLogin] = useState(false)
    const Icon = useRef(null)


    function openLoginMenu(){
        setOpenLogin(!openLogin)
    }

    function openMenu(){
        setOpen(!open)
        // document.querySelector('.header-navbar').classList.toggle('open')
    }

    function cerrarMenu(e){
        setOpen(false)
        document.querySelector('.header-navbar').classList.remove('open')
    }

    open ? document.body.classList.add('hide') : document.body.classList.remove('hide')

    // console.log(user)
  return (
    <div className='header'>
        <div className='header-wrapper'>
         
            <Link to={"/"}  onClick={cerrarMenu} className='escudo'>
                <figure>
                    <img src={escudo} alt={"escudo"} />
                </figure>
            </Link>

            <span>
                <Link to='/'>
                    FSCE
                </Link>
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
                <Link to='/inicio' className='nav' id='nav_inicio' onClick={cerrarMenu}>
                    Inicio
                </Link>
                
                <Link to='/institucional/mision' className='nav' id='nav_institucional' onClick={cerrarMenu} >
                    Institucional <img src={arrow} className='img_arrow img_arrow_institucional' alt="flecha" />
                    <div style={{height: '15px'}}></div>
                    <div className='nav-institucional'>
                        <div>
                            <Link to='/institucional/mision'>Misión</Link>
                            <Link to='/institucional/organizacion'>Organización</Link>
                            <Link to='/institucional/noticias'>Noticias</Link>
                        </div>
                    </div>
                </Link>
                
                <Link to='/beneficios/beneficios' className='nav' id='nav_beneficios' onClick={cerrarMenu}>
                    Beneficios <img src={arrow} className='img_arrow img_arrow_institucional' alt="flecha" />
                    <div style={{height: '15px'}}></div>
                    <div className='nav-institucional'>
                        <div>
                            <Link to='/beneficios/beneficios'>Beneficios</Link>
                            <Link to='/ApoyoEconomico'>Apoyo económico</Link>
                        </div>
                    </div>
                </Link>
                
                {  isAuth && 
                <Link to='/transparencia' onClick={cerrarMenu}>
                    Transparencia <img src={arrow} className='img_arrow' alt="flecha" />
                </Link>
                } 

               { isAuth && 
                <Link to='/descargas' className='nav'onClick={cerrarMenu}>
                    Descargas <img src={arrow} className='img_arrow' alt="flecha" />
                </Link>}
                
              
                <Link to="/contacto" className='nav' onClick={cerrarMenu}>
                    Contácto <img src={arrow} className='img_arrow' alt="flecha" />
                </Link>

  

            </div>

                {isAuth?
                    
                <figure className='figure-ingreso' ref={Icon} onClick={openLoginMenu} >
                    <FaUser className='fa' />
                    <FaAngleDown className='fa-arrow' />
                    <div className={`menu-login ${openLogin && 'desplegado'} `}>
                        <div>ALEXANDRA MARTINEZ</div>
                        <p>DNI 323232</p>
                        <div>ADSFDA- SALIR</div>
                    </div>
                </figure>
                :
                <Link to='/usuarios' className='nav-usuario' onClick={cerrarMenu}>
                    Usuario           
                </Link>
                }

                



        </div>
    </div>
  );
};

export default Header;