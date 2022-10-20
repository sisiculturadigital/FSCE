import React from 'react';
import { Link } from 'react-router-dom';
import { openModal } from '../../redux/modal/modalSlice';
import AccesModal from './accesModal';
import { useDispatch } from 'react-redux';


const Usuarios = () => {

  const dispatch = useDispatch();

  const startModal = () => {
    dispatch(openModal());
  };


  return (
    <div className='usuarios-wrapper'>
        <div className='form-usuario-container'>
            <h1>Ingresa</h1>
            <form className='form-grid'>
            <label>Usuario</label>
                    <input type='text' id='usuario' name='usuario' />
                    <label>Contraseña</label>
                    <input type='text' id='contraseña' name='contraseña' />
            </form>
            <button>ingresar</button>          
            <h3 onClick={startModal} className='links'>Registrate</h3>
            <h3 className='links'>Recuperar contraseña</h3>
        </div>
        <AccesModal />
    </div>
  );
};

export default Usuarios;