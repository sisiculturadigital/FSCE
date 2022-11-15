import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import RecoverPassword from '../../accesos-comunes/modals/RecoverPassword';
import { useModal } from '../../accesos-comunes/modals/useModal';
import { useUserContext } from '../../../context/UserProvider';
import { postLogin } from '../../../components/API/POST-Login2';
import decode from "jwt-decode";

const initialForm = {
  dni:'',
  password:''
}

const Usuarios = () => {    
  
  const [isOpen, openModal, closeModal] = useModal(false)
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [data, setData] = useState(null)

  const navigate = useNavigate()
  const {user, setUser, isAuth, setIsAuth} = useUserContext();


  const Validacion = () =>{

    // if(Object.keys(errors).length === 0) {
    //     setIsAuth(true)
    //     setForm(initialForm)
    // }

    postLogin(form.dni, form.password)
    .then(res => res.json())
    .then(res => {
      console.log(res)
      if(res.token) {
        localStorage.setItem('token', res.token);
        localStorage.setItem('key', form.dni);
  
        const decoded = decode(res.token);
        console.log(decoded)
        if (decoded) {
          setUser(decode(res.token))
          setIsAuth(true)
          sessionStorage.setItem('session_key', true);
          setForm(initialForm)   
        }
      }
    })

    let errors = {}

    if(form.dni === '') errors.dni='Usuario no puede estar vacío'

    if(form.password === undefined || form.password === '') errors.password='Contraseña vacía'

    if(form.dni === '' && (form.password === undefined || form.password === '') ) errors.dni = 'Los campos no pueden estar vacíos'

    if(form.dni !== '' && form.password !== '' && !isAuth ) errors.password = 'Usuario o contraseña inválidos'

    setErrors(errors)


  }

  const HandleChange = (e) =>{
    setForm({
        ...form,
        [e.target.name ]:e.target.value
    })
  }


  const HandleSubmit = (e) =>{
    e.preventDefault()
    Validacion()
  }
  return (

    <div className='usuarios-wrapper'>
        
        <RecoverPassword isOpen={isOpen} closeModal={closeModal}/>

        <h1>Ingresa</h1>

        <div className='form-usuario-container'>

            <form className='form-user'  onSubmit={HandleSubmit}>
              <label>Correo</label>
              <input type='text'  name='dni' autoComplete='off' onChange={HandleChange} value={form.dni} onBlur={HandleChange}
              />
                    
              <label>Contraseña</label>
              <input type='password' name='password'autoComplete='off'  onChange={HandleChange}  value={form.password} onBlur={HandleChange}
               />
              
              <input type='submit' value='Ingresar'  />

              {isAuth ? <h2 style={{color:'green'}}>Bienvenido</h2>: <p>{ errors.dni ?? errors.password }</p> }
                  
            </form>
            
            <Link to='/Registrate'><button>Regístrate</button></Link>
            
            <button className='links' onClick={openModal} >Recuperar contraseña</button>
        </div>
    </div>
  );
};

export default Usuarios;