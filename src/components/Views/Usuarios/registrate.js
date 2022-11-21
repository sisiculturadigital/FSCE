import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../../accesos-comunes/form/useForm';
import { registroUsuario } from '../../../components/API/USUARIO/Registro-Usuario';


const initialForm = {
  name:'',
  lastName:'',
  dni:'',
  email:'',
  DateOfBirth:'',
  codAdm:'',
  password:'',
  repeat_password:'',
  codRole: '2'
  }
  
  // const ValidationsForm = (form) =>{
  //   console.log(form)
    
  //   // let user = data.filter(user=>user.dni === form.dni)
  //   let errors = {}
  //   let regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/
  //   let regexDni=/^[0-9]+$/
  //   let regexContraseña=/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/
  //   let regexNombreApellido=/^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/

    
  //   if(!form.name.trim())errors.name = "No puede estar vacío"
  //   else if(!regexNombreApellido.test(form.name.trim()))errors.name = "No es un nombre válido"


  //   if(!form.lastName.trim())errors.lastName = "No puede estar vacío"
  //   else if(!regexNombreApellido.test(form.lastName.trim()))errors.lastName = "No es un apellido válido"

  //   // if(!form.DateOfBirt.trim())errors.DateOfBirt = "No puede estar vacío"
  //   if(!form.codAdm.trim())errors.codAdm = "No puede estar vacío"

    
  //   if(!form.email.trim())errors.email = "No puede estar vacío"
  //   else if(!regexEmail.test(form.email.trim()))errors.email = "No es un formato email válido"
    
  //   if(!form.dni.trim())errors.dni = "No puede estar vacío"
  //   else if(!regexDni.test(form.dni.trim())) errors.dni = 'Dni solo admite números'

  //   if(!form.password.trim())errors.password = "No puede estar vacío"
  //   else if(!regexContraseña.test(form.password.trim()))errors.password = "La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula."
    
  //   if(!form.repeat_password)errors.repeat_password = "No puede estar vacío"
  //   else if(form.password !== form.repeat_password ) errors.repeat_password = 'La contraseña no coincide'

  //   return errors
  // }


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
    // Validacion()
  }

//  const { form, errors, handleSubmit, handleBlur, handleChange } = useForm(initialForm, ValidationsForm)

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
              <input type='password' name='repeat_password' placeholder='Confirmar contraseña' autoComplete='off' onChange={HandleChange} value={form.repeat_password} onBlur={HandleChange}  />
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