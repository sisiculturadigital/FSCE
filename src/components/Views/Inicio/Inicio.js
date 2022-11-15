import React from 'react'
import { Link } from 'react-router-dom';
import { useEffect } from "react";

import {FaUser} from 'react-icons/fa'
import {FiPaperclip} from 'react-icons/fi'
import {IoMdCheckboxOutline} from 'react-icons/io'
import {FaDollarSign} from 'react-icons/fa'

import { useUserContext } from '../../../context/UserProvider';
import { datosPersonaFx } from '../../../components/API/Datos-Persona';

const Inicio = () => {

const {user, setUser, logOut, isAuth, setIsAuth, datosPersona, setDatosPersona} = useUserContext()

    const email = user.sub

    useEffect(() => {
        datosPersonaFx(email)
        .then(res => res.json())
        .then(res => {
            setDatosPersona(res)
        })
    }, [])
    
console.log(datosPersona)
  return (
    <div className='Inicio-wrapper'>

        <div className='user'>
            <figure>
                <FaUser className='fa' />
            </figure>
            <div>
                {/* <p> { user.name ?? 'Alexandra Martinez' } </p> */}
                <p> {datosPersona && datosPersona.nombreApe} </p>
                <p> {datosPersona && datosPersona.grado} </p>
                {/* <p>DNI {user.dni ?? '232453445'}</p> */}
                <p>DNI {datosPersona && datosPersona.dni}</p>
            </div>
            <input type='button' onClick={logOut} value='Salir' />
        </div>

        <div className='menu-container'>
            <h2>Opciones de Menú</h2>
            <section>
                <div>
                    <center>
                    <Link to={"/saldo"}>
                            <figure> <IoMdCheckboxOutline className='fasearch'/> </figure>
                            <p>SALDO</p>
                        </Link>
                    </center>

                </div>
                <div className='gray'>
                    <Link to={"/aportes"}>
                        <figure><FiPaperclip className='fasearch'/></figure>
                        <p>APORTES</p>
                    </Link>
                </div>
                <div>
                    <Link to={"/pago"}>
                        <figure><FaDollarSign className='fasearch'/></figure>
                        <p>PAGO</p>
                    </Link>
                </div>
            </section>
        </div>

    </div>
  )
}

export default Inicio