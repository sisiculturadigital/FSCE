import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import RecoverPassword from '../../accesos-comunes/modals/RecoverPassword';
import { useModal } from '../../accesos-comunes/modals/useModal';
import { useUserContext } from '../../../context/UserProvider';
import { usePostLogin } from '../../API/POST-Login';
  

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


  function MostraApi(email, pwd){
    
    const gaa = fetch('https://backend-app-v1.herokuapp.com/publico/u/authenticate', {
      method: 'POST',
      body: JSON.stringify({
        email : email,
        pwd : pwd
      }),
      headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    })
    .then(res => res.json())
    .then(data => setData(data))

    // console.log(data)

  }


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
    }
  }


  const HandleChange = (e) =>{
    setForm({
        ...form,
        [e.target.name ]:e.target.value
    })

    // setUser(data.filter(user=>user.dni === form.dni)[0])
  }


  const HandleSubmit = (e) =>{
    e.preventDefault()
    // Validacion()
    // console.log(user)
    // getData(form.dni, form.password)
    // console.log(data || error)

    MostraApi(form.dni, form.password)
    // MostraApi("randy.vdiaz@gmail.com","randy")

    console.log(data)
    console.log(data.message)

  }
  //   email : "randy.vdiaz@gmail.com",
  //   pwd : "randy"
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

              {isAuth ? <h2 style={{color:'green'}}>Bienvenido</h2>: <p>{ errors.dni ?? errors.password}</p> }
                  
            </form>
            
            <Link to='/Registrate'><button>Regístrate</button></Link>
            
            <button className='links' onClick={openModal} >Recuperar contraseña</button>
        </div>
    </div>
  );
};

export default Usuarios;