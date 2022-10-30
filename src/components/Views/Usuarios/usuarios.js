import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { openModal } from '../../../redux/modal/modalSlice';
import AccesModal from '../../forms/accesModal';
import { useDispatch } from 'react-redux';


const Usuarios = () => {
  
  const [form, setForm] = useState({});


  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]:e.target.value,
    })
  };
  

  const handleSubmit =(e) =>{
    e.preventDefault()
    console.log(form)
  }

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
              <input type='text'  name='dni' autoComplete='off' onChange={handleChange} />
                    
              <label>Contraseña</label>
              <input type='password' name='contraseña'autoComplete='off'  onChange={handleChange} />
              
              <input type='submit' value='Ingresar' onClick={handleSubmit}/>
            </form>
            
            <button><Link to='/Registrate'>Regístrate</Link></button> 
            
            <h3 className='links'>Actualizar contraseña</h3>
            <h3 className='links'>Recuperar contraseña</h3>
        </div>
        <AccesModal />
    </div>
  );
};

export default Usuarios;