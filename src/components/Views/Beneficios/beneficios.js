import React from 'react';
import { NavLink, Link, Outlet } from 'react-router-dom';

const Beneficios = () => {
  return (
    <div className='beneficios-wrapper'>
        
        <div className='nav-desktop'>
            
            <Link to='welcome'>Beneficios</Link>
            <NavLink to='#Seguros'>Seguros de cesación</NavLink>
            <NavLink to='#Adelantos'>Adelanto de Beneficios de sesación</NavLink>
            <NavLink to='#Actualizacion'>Actualización del adelanto</NavLink>
            <NavLink to='#Devolucion '>Devolución de Aportes</NavLink>
            <NavLink to='#Carta '>Carta Declaratoria</NavLink>

        
        </div>



        <div className='container'>
            <Outlet />
        </div>

    </div>
  );
};

export default Beneficios;