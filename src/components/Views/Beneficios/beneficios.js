import React from 'react';
import { useState } from 'react';
import { NavLink, Link, Outlet } from 'react-router-dom';
import Arrow from '../../../imgs/Layout/NavBar/arrow.svg'


const Beneficios = () => {

    const NavLinkStyles = ({isActive}) =>{
        return{
            color: isActive ? 'red' : 'white',
            fontWeight: isActive ? '700' : '400'
        }
    }


    const [open1, setOpen1] = useState(false)
    const [open2, setOpen2] = useState(false)
    const [open3, setOpen3] = useState(false)

    function OpenNav1(){setOpen1(!open1)};
    function OpenNav2(){setOpen2(!open2)};
    function OpenNav3(){setOpen3(!open3)};


 

  return (
    <div className='beneficios-wrapper'>
        
        <div className='nav-desktop'>
            
            <NavLink to='beneficios' style={NavLinkStyles}>Beneficios</NavLink>
            <NavLink to='SegurosDeCesacion' style={NavLinkStyles}>Seguros de cesación</NavLink>

            <NavLink to='AdelantoBeneficios' style={NavLinkStyles}  onClick={OpenNav1}>
                <div>Adelanto de Beneficios de cesación</div>
                <img src={Arrow} alt="arrow" />
            </NavLink>
                <div className={`list__show ${open1 && 'open'}`} >
                    <NavLink to='EjemploCalculo' >EJEMPLO: Cálculo del Adelanto del Beneficio en base al 28%</NavLink>
                    <NavLink to='TramiteAdelanto'>Trámite del Adelanto del Beneficio del FSCPC</NavLink>
                </div>

            <NavLink to='Actualizacion' style={NavLinkStyles} className='list__button--click' onClick={OpenNav2}>
                <div>Actualización del adelanto</div> 
                <img src={Arrow} alt="arrow" />
            </NavLink>
                <div className={`list__show ${open2 && 'open'}`} >
                    <NavLink to='EjemploActualizacion'>EJEMPLO: Cálculo de la Actualización del Adelanto al 28%</NavLink>
                    <NavLink to=''>Trámite de la Actualización del Adelanto Beneficio FSCPC</NavLink>
                </div>

            <NavLink to='Devolucion' style={NavLinkStyles} className='list__button--click' onClick={OpenNav3} >
                <div>Devolución de Aportes</div>
                <img src={Arrow} alt="arrow" />
            </NavLink>
                <div className={`list__show ${open3 && 'open'}`} >
                    <NavLink to='' >fasdfdsafdsafasfd</NavLink>
                    <NavLink to=''>fasdfdsafdsafasfd</NavLink>
                </div>

            <NavLink to='CartaDeclaratoria' style={NavLinkStyles}>Carta Declaratoria</NavLink>

        </div>



        <div className='container'>
            <Outlet />
        </div>

    </div>
  );
};

export default Beneficios;