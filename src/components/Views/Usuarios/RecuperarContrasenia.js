import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../../accesos-comunes/form/useForm';
import { recuperarContraseniaPost } from '../../API/USUARIO/Recuperar-Contrasenia';


const initialForm = {
  dni:'',
  email:'',
  DateOfBirth:'',
  codAdm:'',
  password:'',
}


const RecuperarContrasenia = () => {
  const [form, setForm] = useState(initialForm)

  const registroUsuarioFx = () => {
    console.log(form)
    recuperarContraseniaPost(form.dni, form.DateOfBirth, form.codAdm, form.email, form.password)
    .then(res => res.json())
    .then(res => {
      console.log(res)
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
    console.log(form.DateOfBirth)
    const arrDate = (form.DateOfBirth.split("-"))
    const newDateBirth = `${arrDate[2]}/${arrDate[1]}/${arrDate[0]}`
    form.DateOfBirth = newDateBirth;
    setForm(form);
    registroUsuarioFx()
  }

    return (
      <div className='recuperarContrasenia-wrapper'>
          
        <h1>Recuperar Contraseña</h1>
        <div className='form-usuario-container'>
          <form className='form-user'>
              <input type='email'  name='email'  placeholder='Email' autoComplete='off' onChange={HandleChange} value={form.email} onBlur={HandleChange} />
              <input type='password' name='password' placeholder='Contraseña' autoComplete='off'  onChange={HandleChange} value={form.password} onBlur={HandleChange} />
              <input type='date' name='DateOfBirth' placeholder='Fecha de nacimiento' autoComplete='off' onChange={HandleChange} value={form.DateOfBirth} onBlur={HandleChange} />
              <input type='text' name='dni' placeholder='DNI' autoComplete='off' onChange={HandleChange} value={form.dni} onBlur={HandleChange} />
              <input type='text' name='codAdm' placeholder='Cod Adm' autoComplete='off' onChange={HandleChange} value={form.codAdm} onBlur={HandleChange} />
              <input type='submit' value='Enviar' onClick={HandleSubmit} />
          </form>
        </div>
      </div>
    );
  };
  



export default RecuperarContrasenia