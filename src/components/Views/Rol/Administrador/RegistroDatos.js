import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from "react";
import { listaProductos } from '../../../API/SOLICITUD-PRESTAMOS-POR-SEDE/listaProductos';
import { registrarSolicitudPrestamoPorSede } from '../../../API/SOLICITUD-PRESTAMOS-POR-SEDE/Registrar-Solicitud-Prestamo-Por-Sede';

import {BiError} from 'react-icons/bi'
import {BiCheckCircle} from 'react-icons/bi'

import { useUserContext } from '../../../../context/UserProvider';

const initialForm = {
    nroCuo: '',
    impSol: '',
    usuIng: '',
    liquidez: '',
    dni: '',
    ecPtmo: ''
}
const initialError = {
    nroCuo: '',
    impSol: '',
    usuIng: '',
    liquidez: '',
    dni: '',
    ecPtmo: ''
}

const RegistroDatos = () => {
    const [error, setError] = useState(initialError)
    const [servicios, setServicios] = useState()
    const [form, setForm] = useState(initialForm)
    const [valueCodigo, setValueCodigo] = useState("");
    const [response, setResponse] = useState(null)

    const {token} = useUserContext()

    useEffect(() => {
        listaProductos(token)
        .then(res => res.json())
        .then(res => {
                setServicios(res)
            })
    }, [])

    const HandleChange = (e) =>{
        setForm({
            ...form,
            [e.target.name ]:e.target.value
        })
    }
    function submit () {
        registrarSolicitudPrestamoPorSede(form.nroCuo, form.impSol, form.usuIng, form.liquidez, form.dni, form.ecPtmo, token)
        .then(res => res.json())
        .then(res => {
            setResponse(res)
            if(res.code === '200') {
                setForm(initialForm)
            }
        })
    }

    function validator () {
        var reg = /^\d+$/

        if (form.dni === '') {
            error.dni =  '** No puede estar el campo vacío'
            setError(error)
        }
        else if ( !(form.dni).match(reg)  ){
            console.log((form.dni).match(reg))
            error.dni =  '** Solo se acepta números'
            setError(error) 
        }
        // usuIng
        if (form.usuIng === '') {
            error.usuIng =  '** No puede estar el campo vacío'
            setError(error)
        }

        // impSol
        if (form.impSol === '') {
            error.impSol =  '** No puede estar el campo vacío'
            setError(error)
        }
        else if ( !(form.impSol).match(reg)  ){
            console.log((form.impSol).match(reg))
            error.impSol =  '** Solo se acepta números'
            setError(error) 
        }
    }
    function changeInput () {        
        if(form.dni !== '') {
            error.dni = null
            setError(error)
        }
        if(form.usuIng !== '') {
            error.usuIng = null
            setError(error)
        }
        if(form.impSol !== '') {
            error.impSol = null
            setError(error)
        }
    }

    const HandleSubmit = (e) =>{
        e.preventDefault()
        valueCodigo === '' ?  form.ecPtmo = '8650' : form.ecPtmo = valueCodigo;

        validator()

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
                        <div className='label-input'>
                            <label htmlFor="dni"> DNI </label>
                            <input type="text" name='dni' autoComplete='off' onChange={HandleChange} value={form.dni} onBlur={HandleChange} onKeyUp={changeInput}/>
                        </div>
                        <p className='error-message-input'>{error && error.dni}</p>
                    </div>

                    <div>
                        <div className='label-input'>
                            <label htmlFor=""> Usuario ingresado </label>
                            <input type="text" name='usuIng' autoComplete='off' onChange={HandleChange} value={form.usuIng} onBlur={HandleChange}/>
                        </div>
                    </div>

                </div>

                <div className='input_container'>
                    <div>
                        <div className='label-input'>
                            <label htmlFor=""> Importe solicitado </label>
                            <input type="text" name='impSol' autoComplete='off' onChange={HandleChange} value={form.impSol} onBlur={HandleChange} onKeyUp={changeInput}/>
                        </div>
                        <p className='error-message-input'>{error && error.impSol}</p>
                    </div>

                    <div>
                        <div className='label-input'>
                            <label htmlFor=""> Nº de Cuotas </label>
                            <input type="number"  name='nroCuo' autoComplete='off' onChange={HandleChange} value={form.nroCuo} onBlur={HandleChange} />
                        </div>
                    </div>

                </div>

                <div className='input_container'>
                    <div>
                        <div className='label-input'>
                            <label htmlFor=""> Liquidez </label>
                            <input type="number" name='liquidez' autoComplete='off' onChange={HandleChange} value={form.liquidez} onBlur={HandleChange}  />
                        </div>
                    </div>

                    <div>
                        <div className='label-input'>
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

                </div>

                <div className='button-back-perfil  register'>
                <Link to={"/inicio"}>
                    <p onClick={HandleSubmit}>REGISTRAR</p>
                </Link>
                </div>
            </div>
        </form>

        <div className='linea'></div>

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

export default RegistroDatos