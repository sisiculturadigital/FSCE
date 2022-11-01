import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import RecoverPassword from '../../accesos-comunes/modals/RecoverPassword';
import { useModal } from '../../accesos-comunes/modals/useModal';
import { useForm } from '../../accesos-comunes/form/useForm';
import data from './UserList';

const users = []

const initialForm = {
  dni:'',
  password:''
}

const ValidationsForm = (form) =>{
  let errors = {}
  let regexDni=/^[0-9]+$/
  let user = data.filter(user=>user.dni === form.dni)
 
  if(!form.dni.trim())errors.dni = "No puede estar vacío"
  else if(!regexDni.test(form.dni.trim()))errors.dni = "Se acepta solo números"
  else if(user.length === 0) errors.dni = 'usuario no registrado'
  
  else if(!form.password)errors.password = "No puede estar vacío"
  else if( user[0].password !== form.password ) errors.password = 'contraseña no coincide'

  return errors
}


const Usuarios = () => {
  
  const [isOpen, openModal, closeModal] = useModal(false)

  const {
    form,
    errors,
    handleBlur,
    handleChange,
    handleSubmit
} = useForm(initialForm, ValidationsForm, openModal)
  

  return (

    <div className='usuarios-wrapper'>
        
        <RecoverPassword isOpen={isOpen} closeModal={closeModal}/>

        <h1>Ingresa</h1>

        <div className='form-usuario-container'>
            <form className='form-user'>
              <label>DNI</label>
              <input type='text'  name='dni' autoComplete='off' onChange={handleChange} value={form.dni}  onBlur={handleBlur} />
                    
              <label>Contraseña</label>
              <input type='password' name='password'autoComplete='off'  onChange={handleChange}  value={form.password} onBlur={handleBlur}  />
              
              <input type='submit' value='Ingresar' onClick={handleSubmit}/>
            </form>
            
            <Link to='/Registrate'><button>Regístrate</button></Link>
            
            <button className='links' onClick={openModal} >Recuperar contraseña</button>
        </div>
    </div>
  );
};

export default Usuarios;