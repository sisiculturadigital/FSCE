import React from 'react'
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import { aportes } from '../../../API/Roles/Commun/Aportes.js';

import { useUserContext } from '../../../../context/UserProvider';

const Pago = () => {
    
    const {user, setUser, logOut, isAuth, setIsAuth, datosPersona, setDatosPersona} = useUserContext()

    const codAdm = 806964600;

    const [servicios, setServicios] = useState()

    console.log(datosPersona)

    useEffect(() => {
        aportes(codAdm)
        .then(res => res.json())
        .then(res => {
            console.log(res)
            let arr = res.aportes
            console.log(arr)
            let xx = arr.map((aporte) => parseFloat(aporte.impApa)).reduce((previousValue, currentValue) => previousValue + currentValue)
            console.log(xx)
            setServicios(res)
        })
    }, [])
      return (
    <div className='Aportes-wrapper'>
        <div className='button-back-perfil'>
            <Link to={"/inicio"}>
                <p>REGRESAR</p>
            </Link>
        </div>
        <section className='situacion-financiera'>
            <div className='situacion-financiera__title top'>
                SITUACIÓN FINANCIERA
            </div>
            <h3>Datos Personales</h3>

            <div className='datos-personales'>
                <span className='title'>Nombre</span>
                <span className='dato'>{datosPersona.nombreApe}</span>
                <span className='title'>Nº CPI</span>
                <span>######</span>
                <span>suspención de pago</span>
            </div>

            <div className='datos-personales'>
                <span className='title'>Cargo</span>
                <span className='dato'>{datosPersona.grado}</span>
                <span className='title'>Nº DNI</span>
                <span>{datosPersona.dni}</span>
                <span className='title fecha'>Fec. NomBram</span>
                <span></span>
                <span className='title fecha'>Fec. de baja Ep</span>
                <span>##/##/##</span>
            </div>

            <div className='datos-personales'>
                <span className='title fecha'>F. Alta Aportante</span>
                <span>##/##/##</span>
            </div>

        </section>


    </div>
  )
}

export default Pago