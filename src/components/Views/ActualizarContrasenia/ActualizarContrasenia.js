import React, { useState} from 'react'
import { urlFSCE } from '../../API/url-API'
import {BiError} from 'react-icons/bi'
import {BiCheckCircle} from 'react-icons/bi'
import { useUserContext } from '../../../context/UserProvider';

const InitialValue = {
  email:'',
  password:''
}
const InitialValueError = {
  email:'',
  password:''
}
const FetchActualizar = async (email, newPwd, token) => {

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
      Authorization: `Bearer ${token}`,
    } 
  })
  return response
}



const ActualizarContrasenia = () => {

  const {token} = useUserContext()


  const [form, setForm] = useState(InitialValue)
  const [response, setResponse] = useState(null)
  const [error, setError] = useState(InitialValueError)


  let email = ''
  let password = ''


  function updatePwd () {
    FetchActualizar(email, password, token)
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
    function validator () {
      let errors = {}

      if (form.email === '') {
        errors.email =  '** No puede estar el campo vacío'
      }
      if (form.password === '') {
        errors.password =  '** No puede estar el campo vacío'
      }

      setError(errors)

      Object.keys(errors).length === 0 ? updatePwd() : setResponse(null)

    }

    function changeInput () {        
      if(form.email !== '') {
          error.email = null
          setError(error)
      }
      if(form.password !== '') {
          error.password = null
          setError(error)
      }
    }
    
    const HandleSubmit = (e) =>{
      e.preventDefault()
      email = form.email
      password = form.password
      validator()
    }


  return (
    <div className='actualizar-contrasenia-wrapper'>
          
      <h1>Actualizar contraseña</h1>
      <div className='form-usuario-container'>
        <form className='form-user'>

          <input type='email'  name='email'  placeholder='Email' autoComplete='off' 
          onChange={HandleChange} value={form.email} onBlur={HandleChange} onKeyUp={changeInput}/>
          <p className='error-message-input'>{error && error.email}</p>
      
          <input type='password' name='password' placeholder='Contraseña nueva' 
          autoComplete='off' onChange={HandleChange} value={form.password} onBlur={HandleChange} onKeyUp={changeInput} />
          <p className='error-message-input'>{error && error.password}</p>

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