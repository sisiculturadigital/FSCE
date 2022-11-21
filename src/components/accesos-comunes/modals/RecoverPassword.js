import React from 'react'
import { useState, useEffect } from 'react';
import { useForm } from '../form/useForm';
import data from '../../Views/Usuarios/UserList';
import { type } from '@testing-library/user-event/dist/type';
import {recoverPassword} from '../../API/USUARIO/Enviar-Correo-Olvide-Password';


const initialForm = {
    email :''
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
    const [form, setForm] = useState(initialForm)
    const [response, setResponse] = useState(null)

    // useEffect(() => {


     
    // }, [])

    const handleModalContainerClick = (e) =>  e.stopPropagation()
    const handleChange = (e) =>{
        setForm({
            ...form,
            [e.target.name ]:e.target.value
        })
      }
    
    // const {form, errors, handleSubmit, handleBlur, handleChange} = useForm(initialForm, ValidationsForm )
    function handleSubmit (e) {
        e.preventDefault()

        recoverPassword(form.email)
        .then(res => res.json())
        .then(res => {
            setResponse(res)
        })
    }
    console.log(response)

    return (
        <article className = {`modal ${isOpen && 'is-open'}`} onClick={closeModal}>
            <form className="modal-container" onClick={handleModalContainerClick}>

                <input type='button' className='modal-close' onClick={closeModal } value='x' />
                <h2>Recupera tu contraseña</h2>
                <p>Ingresa tu correo electrónico para cambiar contraseña</p>
                <input type="email" name='email'  placeholder='Correo electrónico' onChange={handleChange} onBlur={handleChange}/>
                <input type="submit" value='Buscar' onClick={handleSubmit} />
                <center>
                  <div>
                    { response ? 
                        (response.code === '200'?
                        
                        <div className='success-message'>
                            <p>{response.message}</p>
                            <p>Revisa tu bandeja de correo</p>
                        </div> 
                        :
                        <div className='error-message'>
                            <p>{response.message}</p>
                            <p>Revisa otra vez el correo ingresado</p>
                        </div>
                        )
                    : '' }
                  </div>
                </center>
            </form>
        </article>
    )
  }
  
export default RecoverPassword
