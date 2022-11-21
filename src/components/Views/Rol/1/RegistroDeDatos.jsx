import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { SolicitudDs } from '../../../API/SOLICITUD-PRESTAMOS-POR-SEDE/SolicitudDs';
import {BiError} from 'react-icons/bi'
import {BiCheckCircle} from 'react-icons/bi'

const InitialValue = {
cci: "",
departamento: "",
direccion: "",
distrito: "",
email: "",
entidad: "",
numeroContacto: "",
numeroCta: "",
provincia: ""
}

const RegistroDeDatos = () => {

  const [form, setForm] = useState(InitialValue)
  const [response, setResponse] = useState(null)


  const HandleChange = (e) =>{
    e.preventDefault()
    setForm({
      ...form,
      [e.target.name ]:e.target.value
    })
  }

  const HandleSubmit = (e) =>{
    e.preventDefault()
    SolicitudDs(    
      form.entidad,
      form.numeroCta,
      form.cci,
      form.numeroContacto,
      form.correo,
      form.departamento,
      form.provincia,
      form.distrito,
      form.direccion
      )
    .then(res => res.json())
    .then(res => {
        setResponse(res)
        if(res.code === '200') {
            setForm(InitialValue)
        }
    })

  } 


  return (
    <div className='RegistroDeDatos'>

      <div className='button-back-perfil'>
        <Link to={"/inicio"}>
            <p>REGRESAR</p>
        </Link>
      </div>

      <form onSubmit={HandleSubmit}>

        <h2>Registro de datos</h2>

        <div className='total-container'> 
        
          <div className='label-container'>
            <label htmlFor="entidad">Entidad Bancaria</label>  
            <input type="text" name='entidad' value={form.entidad} id='entidad' onChange={HandleChange} />
          </div>

          <div className='label-container'>
            <label htmlFor="numeroCta">Nº Cuenta Bancaria</label> 
            <input type="text" name='numeroCta' value={form.numeroCta} id='numeroCta'onChange={HandleChange}  />
          </div>

          <div className='label-container'>  
            <label htmlFor="cci">Código Cuenta Interbancaria(CCI)</label>
            <input type="text" name='cci' value={form.cci} id='cci' onChange={HandleChange} />
          </div>
         
        </div>


        <div className='total-container'> 
        
          <div className='label-container'>
            <label htmlFor="numeroContacto">Nº de Contacto</label>  
            <input type="text" name='numeroContacto' value={form.numeroContacto} id='numeroContacto' onChange={HandleChange} />
          </div>

          <div className='label-container'>
            <label htmlFor="email">Correo Electrónico</label> 
            <input type="text" name='email' value={form.email} id='email' onChange={HandleChange} />
          </div>

        </div>
          
        <div className='total-container'>

          <div className='label-container'>
            <label htmlFor="departamento">Departamento</label> 
            <input type="text" name='departamento' value={form.departamento} id='departamento' onChange={HandleChange} />
          </div>
          <div className='label-container'>
            <label htmlFor="provincia">Provincia</label> 
            <input type="text" name='provincia' value={form.provincia} id='provincia' onChange={HandleChange} />
          </div>
          <div className='label-container'>
            <label htmlFor="distrito">Distrito</label> 
            <input type="text" name='distrito' value={form.distrito} id='distrito' onChange={HandleChange} />
          </div>
         
        </div>

        <div className='total-container'>
          <div className='label-container'>
            <label htmlFor="direccion">Dirección</label> 
            <input type="text" name='direccion' value={form.direccion} id='direccion' onChange={HandleChange} />
          </div>
        </div>

    
        <div className=' button-registrar-container'>
          <input type='submit' value='REGISTRAR' className='button-registrar'/> 
        </div>
 

      </form>

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

export default RegistroDeDatos