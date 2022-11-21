import React from 'react'
import { Link } from 'react-router-dom'

const RegistroDeDatos = () => {
  return (
    <div className='RegistroDeDatos'>

      <div className='button-back-perfil'>
        <Link to={"/inicio"}>
            <p>REGRESAR</p>
        </Link>
      </div>

      <form>

        <h2>Registro de datos</h2>

        <div className='total-container'> 
        
          <div className='label-container'>
            <label htmlFor="entidad">Entidad Bancaria</label>  <input type="text" name='entidad' id='entidad' />
          </div>

          <div className='label-container'>
            <label htmlFor="numeroCta">Nº Cuenta Bancaria</label> <input type="text" name='numeroCta' id='numeroCta' />
          </div>

          <div className='label-container'>  
            <label htmlFor="cci">Código Cuenta Interbancaria(CCI)</label><input type="text" name='cci' id='cci' />
          </div>
         
        </div>


        <div className='total-container'> 
        
          <div className='label-container'>
            <label htmlFor="numeroContacto">Nº de Contacto</label>  <input type="text" name='numeroContacto' id='numeroContacto' />
          </div>

          <div className='label-container'>
            <label htmlFor="email">Correo Electrónico</label> <input type="text" name='email' id='email' />
          </div>

        </div>
          
        <div className='total-container'>

          <div className='label-container'>
            <label htmlFor="departamento">Departamento</label> <input type="text" name='departamento' id='departamento' />
          </div>
          <div className='label-container'>
            <label htmlFor="provincia">Provincia</label> <input type="text" name='provincia' id='provincia' />
          </div>
          <div className='label-container'>
            <label htmlFor="distrito">Distrito</label> <input type="text" name='distrito' id='distrito' />
          </div>
         
        </div>

        <div className='total-container'>
          <div className='label-container'>
            <label htmlFor="direccion">Dirección</label> <input type="text" name='direccion' id='direccion' />
          </div>
        </div>

        <div>
          <div className='button-back-perfil button-registrar'>
            <Link to={"/inicio"}>
                <p>REGISTRAR</p>
            </Link>
          </div>
        </div>

      </form>



    </div>
  )
}

export default RegistroDeDatos