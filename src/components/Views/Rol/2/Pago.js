import React from 'react'
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import { pago } from '../../../API/Roles/Commun/Pago.js';

import { useUserContext } from '../../../../context/UserProvider';

const Pago = () => {

const {user, setUser, logOut, datosPersona} = useUserContext()

    console.log(datosPersona)
    
    const codAdmin = 120507200;

    const [servicios, setServicios] = useState()

    useEffect(() => {
        pago(codAdmin)
        .then(res => res.json())
        .then(res => {
                console.log(res)
                setServicios(res)
            })
    }, [])

  return (
    <div className='Pago-wrapper'>
        <div className='button-back-perfil'>
            <Link to={"/inicio"}>
                <p>REGRESAR</p>
            </Link>
        </div>
        <div className='pago-container'>
            <div className='pago-container__info-perfil'>
                <p>Ec Nombrado</p>
                { datosPersona && <p className='pago-container__info-perfil__bg'>{datosPersona.codAdm}</p> }

                <p className='pago-container__info-perfil__bg'>{datosPersona.nombreApe}</p>
            </div>

            <section className='pago-container__Concepto_Pago'>
                <table>
                    <thead>
                        <tr className='border_thead'>
                            <th>Concepto Pago</th>
                            <th>Fecha</th>
                            <th>F.Giro/Transferencia</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                       !servicios ? 'Cargando...' : (servicios.pagos).map((pago , index) =>
                            <tr className='content-info' key={index}>
                                <th>{pago.concepto}</th>
                                <th>{pago.fechChe}</th>
                                <th>{pago.importe}</th>
                            </tr>
                        ) 
                    }
                    </tbody>
                </table>

                <div className='concepto-pago-sub-total'>
                    <p>Sub. Total Girado / Transferencia</p>
                    { !servicios ? 'Cargando...' : <p className='sub-total'>S/ {servicios.pagoTotal}</p> }
                </div>
                
                <table>
                    <tbody>
                    {
                       !servicios ? 'Cargando...' : (servicios.devoluciones).map((pago, index) =>
                            <tr className='content-pago-devolucion' key={index}>
                                <th>{pago.concepto}</th>
                                <th>{pago.fechChe}</th>
                                <th>{pago.importe}</th>
                            </tr>
                        ) 
                    }
                    </tbody>
                </table>
                <div className='concepto-pago-sub-total'>
                    <p>Sub. Total Girado / Transferencia</p>
                    { !servicios ? 'Cargando...' : <p className='sub-total'>S/ {servicios.devolucionTotal}</p> }
                </div>
                <div className='concepto-pago-sub-total'>
                    <p>Total Girado / Transferencia</p>
                    { !servicios ? 'Cargando...' : <p className='sub-total'>S/ {servicios.totalTransferido}</p> }
                </div>

                <hr className='dashed'/>
                <hr className='dashed'/>

            </section>
        </div>

    </div>
  )
}

export default Pago