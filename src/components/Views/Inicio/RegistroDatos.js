import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from "react";
import { listaProductos } from '../../API/SOLICITUD-PRESTAMOS-POR-SEDE/listaProductos';
import { registrarSolicitudPrestamoPorSede } from '../../API/SOLICITUD-PRESTAMOS-POR-SEDE/Registrar-Solicitud-Prestamo-Por-Sede';

import {BiError} from 'react-icons/bi'
import {BiCheckCircle} from 'react-icons/bi'

const initialForm = {
    nroCuo: '',
    impSol: '',
    usuIng: '',
    liquidez: '',
    dni: '',
    ecPtmo: ''
}

const RegistroDatos = () => {
    const [servicios, setServicios] = useState()
    const [form, setForm] = useState(initialForm)
    const [valueCodigo, setValueCodigo] = useState("");
    const [response, setResponse] = useState(null)

    useEffect(() => {
        listaProductos()
        .then(res => res.json())
        .then(res => {
                console.log(res)
                setServicios(res)
            })
    }, [])

    const onKeyUpValue = (e) => {
        console.log(e.target.value)
    }
    const HandleChange = (e) =>{
        setForm({
            ...form,
            [e.target.name ]:e.target.value
        })
    }
    function submit () {
        registrarSolicitudPrestamoPorSede(form.nroCuo, form.impSol, form.usuIng, form.liquidez, form.dni, form.ecPtmo)
        .then(res => res.json())
        .then(res => {
            setResponse(res)
        })
    }

    const HandleSubmit = (e) =>{
    e.preventDefault()
    // valueCodigo === '' ?  form.ecPtmo = '0001' : form.ecPtmo = valueCodigo;
    valueCodigo === '' ?  form.ecPtmo = '8650' : form.ecPtmo = valueCodigo;
    form.nroCuo = parseFloat(form.nroCuo)
    form.impSol = parseFloat(form.impSol)
    form.liquidez = parseFloat(form.liquidez)
 
    setForm(form);
    // Validacion()
    console.log(form)
    submit()
    }

  return (
    <div className='RegistroDatos-wrapper'>

        <div className='button-back-perfil'>
            <Link to={"/inicio"}>
                <p>REGRESAR</p>
            </Link>
        </div>
        <form className='form-user'>
            <div className='container'>
                <h2>Registro de datos</h2>
                <div className='input_container'>
                    <div>
                        <label htmlFor="dni"> DNI </label>
                        <input type="text" name='dni' autoComplete='off' onKeyUp={onKeyUpValue} onChange={HandleChange} value={form.dni} onBlur={HandleChange}/>
                    </div>

                    <div>
                        <label htmlFor=""> Usuario ingresado </label>
                        <input type="text" name='usuIng' autoComplete='off' onChange={HandleChange} value={form.usuIng} onBlur={HandleChange}/>
                    </div>
                </div>

                <div className='input_container'>
                    <div>
                        <label htmlFor=""> Importe solicitado </label>
                        <input type="number" name='impSol' autoComplete='off' onChange={HandleChange} value={form.impSol} onBlur={HandleChange}/>
                    </div>
                    <div>
                        <label htmlFor=""> Nº de Cuotas </label>
                        <input type="number"  name='nroCuo' autoComplete='off' onChange={HandleChange} value={form.nroCuo} onBlur={HandleChange} />
                    </div>
                </div>

                <div className='input_container'>
                    <div>
                        <label htmlFor=""> Liquidez </label>
                        <input type="number" name='liquidez' autoComplete='off' onChange={HandleChange} value={form.liquidez} onBlur={HandleChange}  />
                    </div>
                    <div>
                        <label htmlFor=""> Producto </label>
                        <select name='ecPtmo' onChange={ (event) => setValueCodigo( event.target.value)  }>
                            {
                                !servicios ? 'Cargando...' : (servicios.productos).map((option, index) =>
                                    <option key={index} value={option.codigo}>{option.desProducto}</option>
                                ) 
                            }
                        </select>

                            

                    </div>
                </div>

                <div className='button-back-perfil  register'>
                <Link to={"/inicio"}>
                    <p onClick={HandleSubmit}>REGISTRAR</p>
                </Link>
                </div>
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

        <div className='linea'></div>
    </div>
  )
}

export default RegistroDatos