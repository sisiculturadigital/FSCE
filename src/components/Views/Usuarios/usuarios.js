import React, { useState } from 'react';
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
        <div className='form-usuario-container'>
            <h1>Ingresa</h1>
            <form className='form-user'>
              <label>DNI</label>
              <input type='text' id='dni' name='dni' value={dni} onChange={handleChangeDni} />
                    
              <label>Contraseña</label>
              <input type='text' id='contraseña' name='contraseña' value={contraseña}  />
              
              <button type='submit'>ingresar</button>          
            </form>
            <h3 onClick={startModal} className='links'>Registrate</h3>
            <h3 className='links'>Recuperar contraseña</h3>
        </div>
        <AccesModal />
    </div>
  );
};

export default Usuarios;