import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import RecoverPassword from '../../accesos-comunes/modals/RecoverPassword';
import { useModal } from '../../accesos-comunes/modals/useModal';
import data from './UserList';
import { useUserContext } from '../../../context/UserProvider';
  

const initialForm = {
  dni:'',
  password:''
}

const Usuarios = () => {    
  
  const [isOpen, openModal, closeModal] = useModal(false)
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})

  const navigate = useNavigate()
  const {user, setUser, isAuth, setIsAuth} = useUserContext();


  const Validacion = () =>{

    let errors = {}

    if(form.dni === '') errors.dni='Usuario no puede estar vacío'
    else if(!user) errors.dni='Usuario no registrado'

    if(form.password === undefined || form.password === '') errors.password='Contraseña vacía'
    else if(form.password !== user.password )  errors.password ='Contraseña incorrecta'

    setErrors(errors)

    if(Object.keys(errors).length === 0) {
        setIsAuth(true)
        setForm(initialForm)
        setTimeout(() => {
          navigate('/inicio')
        }, 2000);
    }
  }


  const HandleChange = (e) =>{
    setForm({
        ...form,
        [e.target.name ]:e.target.value
    })
    setUser(data.filter(user=>user.dni === form.dni)[0])
  }


  const HandleSubmit = (e) =>{
    e.preventDefault()
    Validacion()
    console.log(user)
  }

  return (

    <div className='usuarios-wrapper'>
        
        <RecoverPassword isOpen={isOpen} closeModal={closeModal}/>

        <h1>Ingresa</h1>

        <div className='form-usuario-container'>

            <form className='form-user'  onSubmit={HandleSubmit}>
              <label>DNI</label>
              <input type='text'  name='dni' autoComplete='off' onChange={HandleChange} value={form.dni} onBlur={HandleChange}
              />
                    
              <label>Contraseña</label>
              <input type='password' name='password'autoComplete='off'  onChange={HandleChange}  value={form.password} onBlur={HandleChange}
               />
              
              <input type='submit' value='Ingresar'  />

              {isAuth ? <h2 style={{color:'green'}}>Bienvenido</h2>: <p>{ errors.dni ?? errors.password}</p> }
                  
            </form>
            
            <Link to='/Registrate'><button>Regístrate</button></Link>
            
            <button className='links' onClick={openModal} >Recuperar contraseña</button>
        </div>
    </div>
  );
};

export default Usuarios;