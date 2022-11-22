import React from 'react'
import { useState } from 'react';
import {recoverPassword} from '../../API/USUARIO/Enviar-Correo-Olvide-Password';


const initialForm = {
    email :''
}



const RecoverPassword = ({ isOpen, closeModal}) => {
    const [form, setForm] = useState(initialForm)
    const [response, setResponse] = useState(null)


    const handleModalContainerClick = (e) =>  e.stopPropagation()
    const handleChange = (e) =>{
        setForm({
            ...form,
            [e.target.name ]:e.target.value
        })
      }
    
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
