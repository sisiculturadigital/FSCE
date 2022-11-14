import React from 'react'
import { useState } from 'react';
import { useForm } from '../form/useForm';
import data from '../../Views/Usuarios/UserList';
import { type } from '@testing-library/user-event/dist/type';


const initialForm = {
password:''
}


const ValidationsForm = (form) =>{

let errors = {}
let regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/
// let user = data.filter(user=>user.dni === form.dni)

if(!form.email.trim()) errors.email = "No puede estar vacío"
else if(!regexEmail.test(form.email.trim())) errors.email = "No es un formato email válido"


return errors
}


const RecoverPassword = ({ isOpen, closeModal}) => {

    const handleModalContainerClick = (e) =>  e.stopPropagation()
    
    const {form, errors, handleSubmit, handleBlur, handleChange} = useForm(initialForm, ValidationsForm )

    return (
        <article className = {`modal ${isOpen && 'is-open'}`} onClick={closeModal}>
            <form className="modal-container" onClick={handleModalContainerClick}>

                <input type='button' className='modal-close' onClick={closeModal } value='x' />
                <h2>Recupera tu contraseña</h2>
                <p>Ingresa tu correo electrónico para cambiar contraseña</p>
                <input type="email" name='email'  placeholder='Correo electrónico' onChange={handleChange} onBlur={handleBlur}/>
                <input type="submit" value='Buscar' onClick={handleSubmit} />

            </form>
        </article>
    )
  }
  
export default RecoverPassword
