import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import RecoverPassword from '../../accesos-comunes/modals/RecoverPassword';
import { useModal } from '../../accesos-comunes/modals/useModal';
import { useUserContext } from '../../../context/UserProvider';
import UseFetchValidacion from '../../API/FetchValidacion';
// import { usePostLogin } from '../../API/POST-Login';

const initialForm = {
  dni:'',
  password:''
}

const Usuarios = () => {    
  
  const [isOpen, openModal, closeModal] = useModal(false)
  const [form, setForm] = useState(initialForm)
  // const [errors, setErrors] = useState({})
  // const [data, setData] = useState(null)
  // const [error, setError] = useState(null)
  // const [isEncontrado, setisEncontrado] = useState(false)
  const [data2, setData2] = useState(initialForm)



  const navigate = useNavigate()
  // const {user, setUser, isAuth, setIsAuth} = useUserContext();

  const { error, isEncontrado, data, resultado } = UseFetchValidacion(data2.dni, data2.password)

  // function MostraApi(email, pwd){
    
  //   const gaa = fetch('https://backend-app-v1.herokuapp.com/publico/u/authenticate', {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       email : email,
  //       pwd : pwd
  //     }),
  //     headers: {
  //       "Content-type": "application/json",
  //       "Access-Control-Allow-Origin": "*"
  //     }
  //   })
  //   .then(res => res.json())
  //   .then(datos => {
  //     if ( Object.keys(datos).length === 2) {
  //       setError(datos)
  //       setisEncontrado(false)
  //     } 
  //     if ( Object.keys(datos).length === 1) {
  //       setData(datos)
  //       setisEncontrado(true)
  //     }
  //   }
  //   )
  // }

  // const Validacion = () =>{

  //   let errors = {}

  //   if(form.dni === '') errors.dni='Usuario no puede estar vacío'
  //   else if(!user) errors.dni='Usuario no registrado'

  //   if(form.password === undefined || form.password === '') errors.password='Contraseña vacía'
  //   else if(form.password !== user.password )  errors.password ='Contraseña incorrecta'

  //   setErrors(errors)

  //   if(Object.keys(errors).length === 0) {
  //       setIsAuth(true)
  //       setForm(initialForm)
  //   }
  // }


  const HandleChange = (e) =>{
    setForm({
        ...form,
        [e.target.name ]:e.target.value
    })
  }



  
  const HandleSubmit = (e) =>{
    e.preventDefault()
    setData2(form)
    resultado()

    // MostraApi(form.dni, form.password)

    // isEncontrado && console.log(data)
    // !isEncontrado && console.log('Usuario o contraseña incorrectos')
  }
  
  // Validacion()
  // console.log(user)
  // getData(form.dni, form.password)
  // console.log(data || error)


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

              {/* {isAuth ? <h2 style={{color:'green'}}>Bienvenido</h2>: <p>{ errors.dni ?? errors.password}</p> } */}
                  
            </form>
            
            <Link to='/Registrate'><button>Regístrate</button></Link>
            
            <button className='links' onClick={openModal} >Recuperar contraseña</button>
        </div>
    </div>
  );
};

export default Usuarios;