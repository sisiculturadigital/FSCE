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
  console.log(x.matches)

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
        case "mision" :
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
    // background: url('../../imgs/View/descargas/bg-descargas.png') no-repeat center center fixed;
    // background-repeat: no-repeat;
    // background-size: cover;
    // height: calc( 100vh - 265px);
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
      case "mision" :
        break;
      default:
        break;

    }
  };

  return (
    // <div className='institucional-wrapper'>
    //     <div className='mision-vision'>
    //       <h1>Mision</h1>
    //       <p>
    //       Contribuir al Bienestar del Personal del Ejército, mediante el otorgamiento de los beneficios del Fondo de Seguro de 
    //       Cesación, así como la prestación de servicios financieros de calidad y en las mejores condiciones del mercado promedio.
    //       </p>
    //       <h1>Funcion</h1>
    //       <p>Administrar el Fondo de Seguro de Cesación del Personal Civil del Ejército y el Fondo de Prestamos al Personal, 
    //         asegurando el pago de los beneficios que otorga de acuerdo a la normatividad vigente</p>
    //     </div>
    //     <div className='organigrama'>
    //       <h1>Organizacion</h1>

    //       <div className='single-grid'>
    //         <section>
    //           <p>Consejo Directivo</p>
    //         </section>
    //       </div>

    //       <div className='third-grid'>
    //         <section><p>Seccion Fondo de Seguro</p></section>
    //         <section><p>Seccion Apoyo Economico</p></section>
    //         <section><p>Seccion Tesoreria</p></section>
    //       </div>
    //     </div>
    // </div>

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
            <Outlet />
        </div>
    </div>
  );
};

export default Institucional;