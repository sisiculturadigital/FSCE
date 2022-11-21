import React from 'react';
import { useState, useRef } from 'react';
import { NavLink, Link, Outlet } from 'react-router-dom';
import Arrow from '../../../imgs/Layout/NavBar/arrow.svg'
import ScrollToTop from './ScrollToTop'

const Beneficios = () => {

    const container = useRef(null)
    const nav1 = useRef(null), nav2 = useRef(null), nav3 = useRef(null)


    const scrollToSection = (elementRef) =>{
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: 'smooth'
        })
    }

    const NavLinkStyles = ({isActive}) =>{
        return{
            color: isActive ? 'red' : 'white',
            fontWeight: isActive ? '700' : '400'
        }
    }

    const NavLinkStylesSubMenu = ({isActive}) =>{
        return{
            color: isActive ? 'red' : 'black',
            fontWeight: isActive ? '700' : '400'
        }
    }

    function DesplegarMenues (nav){
        let menu = nav.current.nextElementSibling
        if(menu.clientHeight === 0){
            menu.style.height = `${menu.scrollHeight}px`
        }
        else{
            menu.style.height = '0px'
        }
    }

  return (
    <div className='beneficios-wrapper'>
        <ScrollToTop />
        <div className='nav-desktop'>
            <NavLink to='beneficios' style={NavLinkStyles} onClick={()=>scrollToSection(container)} >Beneficios  </NavLink>
            <NavLink to='SegurosDeCesacion' style={NavLinkStyles} onClick={()=>scrollToSection(container)}>Seguros de cesación</NavLink>

            <NavLink to='AdelantoBeneficios' style={NavLinkStyles}  onClick={()=>(DesplegarMenues(nav1))} ref={nav1}>
                <div>Adelanto de Beneficios de cesación</div>
                <img src={Arrow} alt="arrow" />
            </NavLink>
                <div className='list__show' >
                    <NavLink to='EjemploCalculo'  style={NavLinkStylesSubMenu} onClick={()=>scrollToSection(container)}>EJEMPLO: Cálculo del Adelanto del Beneficio en base al 28%</NavLink>
                    <NavLink to='TramiteAdelanto' style={NavLinkStylesSubMenu} onClick={()=>scrollToSection(container)}>Trámite del Adelanto del Beneficio del FSCPC</NavLink>
                </div>

            <NavLink to='Actualizacion' style={NavLinkStyles} className='list__button--click' onClick={()=>(DesplegarMenues(nav2))} ref={nav2}>
                <div>Actualización del adelanto (Reintegro)</div> 
                <img src={Arrow} alt="arrow" />
            </NavLink>
                <div className='list__show' >
                    <NavLink to='EjemploActualizacion' style={NavLinkStylesSubMenu} onClick={()=>scrollToSection(container)}>EJEMPLO: Cálculo de la Actualización del Adelanto al 28%</NavLink>
                    <NavLink to='TramiteActualizacion' style={NavLinkStylesSubMenu} onClick={()=>scrollToSection(container)}>Trámite de la Actualización del Adelanto Beneficio FSCPC</NavLink>
                </div>

            <NavLink to='DevolucionAportes' style={NavLinkStyles} className='list__button--click' onClick={()=>(DesplegarMenues(nav3))} ref={nav3} >
                <div>Devolución de Aportes</div>
                <img src={Arrow} alt="arrow" />
            </NavLink>
                <div className='list__show' >
                    <NavLink to='EjemploDevolucion' style={NavLinkStylesSubMenu} onClick={()=>scrollToSection(container)}>EJEMPLO: Cálculo de la Devolución de aportes</NavLink>
                    <NavLink to='TramiteDevolucion' style={NavLinkStylesSubMenu} onClick={()=>scrollToSection(container)}>Trámite para la Devolución de aportes al FSCPC</NavLink>
                </div>

            <NavLink to='CartaDeclaratoria' style={NavLinkStyles} onClick={()=>scrollToSection(container)}>Carta Declaratoria</NavLink>
            {/* <NavLink to='ApoyoEconomico' style={NavLinkStyles} onClick={()=>scrollToSection(container)}>Apoyo Económico</NavLink> */}

        </div>

        <div className='container' ref={container}>
            <Outlet  />
        </div>

    </div>
  );
};

export default Beneficios;