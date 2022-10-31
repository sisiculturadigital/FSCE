import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';


const Registrate = () => {

    const [register, setForm] = useState({});

    const handleChange = (e) => {
      setForm({
        ...register,
        [e.target.name]:e.target.value,
      })
    };
    

    const handleSubmit =(e) =>{
      e.preventDefault()
      console.log(register)
    }


    return (
      <div className='registrate-wrapper'>
          
        <h1>Regístrate</h1>
        <div className='form-usuario-container'>
              <form className='form-user'>
                <div className='name_lastName'>
                    <input type='text'  name='name' placeholder='Nombre' autoComplete='off' onChange={handleChange} />

                    <input type='text'  name='lastName'  placeholder='Apellido' autoComplete='off' onChange={handleChange}/>
                </div>

                <input type='email'  name='email'  placeholder='Email' autoComplete='off' onChange={handleChange}/>
                <input type='password' name='password' placeholder='Contraseña' autoComplete='off' onChange={handleChange} />
                <input type='password' name='repeat_password' placeholder='Confirmar contraseña' autoComplete='off' onChange={handleChange} />
                <input type='date' name='DateOfBirth' placeholder='Fecha de nacimiento' autoComplete='off' onChange={handleChange} />
                <input type='text' name='dni' placeholder='DNI' autoComplete='off' onChange={handleChange} />
                <input type='text' name='codAdm' placeholder='Cod Adm' autoComplete='off' onChange={handleChange} />
                <input type='submit' value='Registrate' onClick={handleSubmit} />
              </form>
        </div>
      </div>
    );
  };
  



export default Registrate