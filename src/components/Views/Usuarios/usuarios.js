import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { openModal } from '../../../redux/modal/modalSlice';
import AccesModal from '../../forms/accesModal';
import { useDispatch } from 'react-redux';


const Usuarios = () => {
  
  const [dni, setDni] = useState('');
  const [contraseña, setContraseña] = useState('');

  const handleChangeDni = (event) => {
    setDni(event.target.value);
  };


  const dispatch = useDispatch();

  const startModal = () => {
    dispatch(openModal());
  };



  return (
    <div className='usuarios-wrapper'>
        
        <h1>Ingresa</h1>
        <div className='form-usuario-container'>
            <form className='form-user'>
              <label>DNI</label>
              <input type='text' id='dni' name='dni' value={dni} onChange={handleChangeDni} />
                    
              <label>Contraseña</label>
              <input type='password' id='contraseña' name='contraseña' />
              
              <input type='submit'  value='Ingresar' />
            </form>
            
            <button><Link>Regístrate</Link></button> 
            
            <h3 className='links'>Actualizar contraseña</h3>
            <h3 className='links'>Recuperar contraseña</h3>
        </div>
        <AccesModal />
    </div>
  );
};

export default Usuarios;