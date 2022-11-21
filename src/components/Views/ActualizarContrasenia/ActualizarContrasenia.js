import React, { useState, useEffect} from 'react'
import { urlFSCE } from '../../API/url-API'
import {BiError} from 'react-icons/bi'
import {BiCheckCircle} from 'react-icons/bi'

const InitialValue = {
  email:'',
  password:''
}

const FetchActualizar = async (email, newPwd) => {

  const response = fetch(`${urlFSCE}/private/u/actualizar/pass`, {  
    method: 'PUT', 
    body: JSON.stringify(
      {
        email,
        newPwd,
      }
    ), 
    headers: { 
      "Content-type": "application/json", 
      "Access-Control-Allow-Origin": "*" ,
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    } 
  })
  return response
}



const ActualizarContrasenia = () => {

  const [form, setForm] = useState(InitialValue)
  const [response, setResponse] = useState(null)


  let email = ''
  let password = ''


  function updatePwd () {
    FetchActualizar(email, password)
    .then(res => res.json())
    .then(res => {
      setResponse(res)
      if(res.code === '200') {
          setForm(InitialValue)
      }
  })

  }



    const HandleChange = (e) =>{
      e.preventDefault()
      setForm({
        ...form,
        [e.target.name ]:e.target.value
      })
    }
    
    
    const HandleSubmit = (e) =>{
      e.preventDefault()
      console.log(form)
      email = form.email
      password = form.password

      updatePwd()
    }


  return (
    <div className='actualizar-contrasenia-wrapper'>
          
      <h1>Actualizar contraseña</h1>
      <div className='form-usuario-container'>
        <form className='form-user'>

          <input type='email'  name='email'  placeholder='Email' autoComplete='off' 
          onChange={HandleChange} value={form.email} onBlur={HandleChange} />
      
          <input type='password' name='password' placeholder='Contraseña nueva' 
          autoComplete='off' onChange={HandleChange} value={form.password} onBlur={HandleChange}  />
      
          <input type='submit' value='Actualizar' onClick={HandleSubmit} />
            
        </form>
      </div>

      <center>
        <div>
        { response ? 
            (response.code === '200'?
            
            <div className='success-message'>
                <figure><BiCheckCircle className='fasearch' style={{color:"#1BE9B8"}}/></figure>
                <p>{response.message}</p>
            </div> 
            :
            <div className='error-message'>
                <figure><BiError className='fasearch' style={{color:"#CA3937"}}/></figure>
                <p>{response.message}</p>
            </div>
            )
        : '' }
        </div>
        </center>
  </div>
  )
}

export default ActualizarContrasenia