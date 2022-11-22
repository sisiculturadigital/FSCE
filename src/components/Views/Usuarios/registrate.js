import React from 'react'
import { useState } from 'react';
import { registroUsuario } from '../../../components/API/USUARIO/Registro-Usuario';


const initialForm = {
  name:'',
  lastName:'',
  dni:'',
  email:'',
  DateOfBirth:'',
  codAdm:'',
  password:'',
  codRole: '2'
  }

const Registrate = () => {
  const [form, setForm] = useState(initialForm)

  const registroUsuarioFx = () => {
    console.log(form)
    registroUsuario(form.dni, form.DateOfBirth, form.codAdm, form.email, form.password, form.name, form.lastName, form.codRole)
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
      <div className='registrate-wrapper'>
          
        <h1>Regístrate</h1>
        <div className='form-usuario-container'>
          <form className='form-user'>
              <div className='name_lastName'>
                  <input type='text'  name='name' placeholder='Nombre' autoComplete='off' onChange={HandleChange} value={form.name} onBlur={HandleChange} />
                  <input type='text'  name='lastName'  placeholder='Apellido' autoComplete='off' onChange={HandleChange} value={form.lastName} onBlur={HandleChange} />
              </div>

              <input type='email'  name='email'  placeholder='Email' autoComplete='off' onChange={HandleChange} value={form.email} onBlur={HandleChange} />
              <input type='password' name='password' placeholder='Contraseña' autoComplete='off'  onChange={HandleChange} value={form.password} onBlur={HandleChange} />
              <input type='date' name='DateOfBirth' placeholder='Fecha de nacimiento' autoComplete='off' onChange={HandleChange} value={form.DateOfBirth} onBlur={HandleChange} />
              <input type='text' name='dni' placeholder='DNI' autoComplete='off' onChange={HandleChange} value={form.dni} onBlur={HandleChange} />
              <input type='text' name='codAdm' placeholder='Cod Adm' autoComplete='off' onChange={HandleChange} value={form.codAdm} onBlur={HandleChange} />
              <input type='text' name='codRole' placeholder='Cod Adm' autoComplete='off' value="2" style={{display:"none"}} />
              <input type='submit' value='Registrate' onClick={HandleSubmit} />
          </form>
        </div>
      </div>
    );
  };
  



export default Registrate