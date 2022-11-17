import React from 'react'
import { Link } from 'react-router-dom'

const RegistroDatos = () => {
  return (
    <div className='RegistroDatos-wrapper'>

        <div className='button-back-perfil'>
            <Link to={"/inicio"}>
                <p>REGRESAR</p>
            </Link>
        </div>

        <div className='container'>
            <h2>Registro de datos</h2>
            <div className='input_container'>
                <div>
                    <label htmlFor="dni"> DNI </label>
                    <input type="text" name='dni' />
                </div>

                <div>
                    <label htmlFor=""> Usuario ingresado </label>
                    <input type="text" />
                </div>
            </div>

            <div className='input_container'>
                <div>
                    <label htmlFor=""> Importe solicitado </label>
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor=""> Nº de Cuotas </label>
                    <input type="text"  />
                </div>
            </div>

            <div className='input_container'>
                <div>
                    <label htmlFor=""> Liquidez </label>
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor=""> Producto </label>
                    <input type="text" />
                </div>
            </div>

            <div className='button-back-perfil  register'>
            <Link to={"/inicio"}>
                <p>REGISTRAR</p>
            </Link>
            </div>
        </div>
        <div className='linea'></div>
    </div>
  )
}

export default RegistroDatos