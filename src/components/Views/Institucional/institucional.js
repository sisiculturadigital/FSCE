import React from 'react';
import { useState, useRef, useEffect } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import backgroundMision from '../../../imgs/View/Institucional/Mision/background-desktop.png'
import backgroundOrganizacion from '../../../imgs/View/Institucional/Organizacion/background-desktop.png'
import backgroundOrganizacionResponse from '../../../imgs/View/descargas/bg-descargas.png'


const Institucional = () => {
  const [background, setBackground] = useState('')
  const elementDomBg = useRef();
  var x = window.matchMedia("(max-width: 700px)")

  const response = () => {
    elementDomBg.current.style.background = `url(${backgroundOrganizacionResponse}) no-repeat center center fixed`;
    elementDomBg.current.style.backgroundRepeat = 'no-repeat';
    elementDomBg.current.style.backgroundSize = 'cover';
  }
  const bgDesktop = () => {
    elementDomBg.current.style.background = `url(${backgroundOrganizacion}) no-repeat center center fixed`;
    elementDomBg.current.style.backgroundRepeat = 'no-repeat';
    elementDomBg.current.style.backgroundSize = 'cover';
  }

  var arrayDeCadenas = window.location.pathname.split('/institucional/')
    useEffect(() => {
      switch(arrayDeCadenas[1]) {
        case "mision" :
          elementDomBg.current.style.background = `url(${backgroundMision}) no-repeat center center fixed`;
          elementDomBg.current.style.backgroundRepeat = 'no-repeat';
          elementDomBg.current.style.backgroundSize = 'cover';
          break;
        case "organizacion" :
          x.matches === true ? response() : bgDesktop();
          break;
        default:
          break;
      }
    });
  
  const NavLinkStyles = ({isActive}) =>{
    return{
        color: isActive ? 'red' : 'white',
        fontWeight: isActive ? '700' : '400'
    }
  }
  function backgroundChange (value) { 
    setBackground(value);
    switch(value) {
      case "mision" :
        elementDomBg.current.style.background = `url(${backgroundMision}) no-repeat center center fixed`;
        elementDomBg.current.style.backgroundRepeat = 'no-repeat';
        elementDomBg.current.style.backgroundSize = 'cover';
        break;
      case "organizacion" :
        elementDomBg.current.style.background = `url(${backgroundOrganizacion}) no-repeat center center fixed`;
        elementDomBg.current.style.backgroundRepeat = 'no-repeat';
        elementDomBg.current.style.backgroundSize = 'cover';
        break;
      default:
        break;

    }
  };

  return (

    <div className='institucional-wrapper' ref={elementDomBg}>
      <center>
        <div className='institucional-wrapper__navbar'>
          <NavLink to='mision' style={NavLinkStyles} onClick={() => {backgroundChange('mision')}}>MISION</NavLink>
          <hr className='linea'></hr>
          <NavLink to='organizacion'style={NavLinkStyles} onClick={() => {backgroundChange('organizacion')}}>ORGANIZACIÓN</NavLink>
          <hr className='linea'></hr>
          <NavLink to='noticias' style={NavLinkStyles} onClick={() => {backgroundChange('noticias')}}>NOTICIAS</NavLink>
        </div>
      </center>

      <div className='container'>
            <Outlet/>
        </div>
    </div>
  );
};

export default Institucional;