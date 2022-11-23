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
        let errors = {}

        var reg = /^\d+$/

        if (form.dni === '') {
            errors.dni =  '** No puede estar el campo vacío'
            
        }
        else if ( !(form.dni).match(reg)  ){
            errors.dni =  '** Solo se acepta números'     
        }
        // usuIng
        if (form.usuIng === '') {
            errors.usuIng =  '** No puede estar el campo vacío'
            
        }

        // impSol
        if (form.impSol === '') {
            errors.impSol =  '** No puede estar el campo vacío'
        }
        else if ( !(form.impSol).match(reg)  ){
            errors.impSol =  '** Solo se acepta números'
        }
        // nroCuo
        if(form.nroCuo === '') {
            errors.nroCuo =  '** No puede estar el campo vacío'
        }
        else if ( !(form.nroCuo).match(reg)  ){
            errors.nroCuo =  '** Solo se acepta números'
        }
        // liquidez
        if(form.liquidez === '') {
            errors.liquidez =  '** No puede estar el campo vacío'
        }
        else if ( !(form.liquidez).match(reg)  ){
            errors.liquidez =  '** Solo se acepta números'
        }

        setError(errors)

        Object.keys(errors).length === 0 ? submit() : setResponse(null)

    }

    function changeInput (elemento) {        
        if(form.dni !== ''  && elemento === 'dni') {
            error.dni = null
            setError(error)
        }
        if(form.usuIng !== '') {
            error.usuIng = null
            setError(error)
        }
        if(form.impSol !== '' && elemento === 'impSol') {
            error.impSol = null
            setError(error)
        }
        if(form.nroCuo !== ''  && elemento === 'nroCuo') {
            error.nroCuo = null
            setError(error)
        }
        if(form.liquidez !== ''  && elemento === 'liquidez') {
            error.liquidez = null
            setError(error)
        }
    }

    const HandleSubmit = (e) =>{
        e.preventDefault()
        valueCodigo === '' ?  form.ecPtmo = '8650' : form.ecPtmo = valueCodigo;
        setError(error)

        validator()
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
                            <input type="text" name='dni' autoComplete='off' onChange={HandleChange} value={form.dni} onBlur={HandleChange} onKeyUp={()=> {changeInput('dni')}}/>
                        </div>
                        <p className='error-message-input'>{error && error.dni}</p>
                    </div>

                    <div>
                        <div className='label-input'>
                            <label htmlFor=""> Usuario ingresado </label>
                            <input type="text" name='usuIng' autoComplete='off' onChange={HandleChange} value={form.usuIng} onBlur={HandleChange} onKeyUp={changeInput}/>
                        </div>
                        <p className='error-message-input'>{error && error.usuIng}</p>
                    </div>

                </div>

                <div className='input_container'>
                    <div>
                        <div className='label-input'>
                            <label htmlFor=""> Importe solicitado </label>
                            <input type="text" name='impSol' autoComplete='off' onChange={HandleChange} value={form.impSol} onBlur={HandleChange} onKeyUp={ () => {changeInput('impSol')}}/>
                        </div>
                        <p className='error-message-input'>{error && error.impSol}</p>
                    </div>

                    <div>
                        <div className='label-input'>
                            <label htmlFor=""> Nº de Cuotas </label>
                            <input type="text"  name='nroCuo' autoComplete='off' onChange={HandleChange} value={form.nroCuo} onBlur={HandleChange} onKeyUp={() => changeInput('nroCuo')}/>
                        </div>
                        <p className='error-message-input'>{error && error.nroCuo}</p>
                    </div>

                </div>

                <div className='input_container'>
                    <div>
                        <div className='label-input'>
                            <label htmlFor=""> Liquidez </label>
                            <input type="text" name='liquidez' autoComplete='off' onChange={HandleChange} value={form.liquidez} onBlur={HandleChange} onKeyUp={() => changeInput('liquidez')} />
                        </div>
                        <p className='error-message-input'>{error && error.liquidez}</p>
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

                    <p onClick={HandleSubmit}>REGISTRAR</p>

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