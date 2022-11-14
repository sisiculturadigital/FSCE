import React from 'react'
import { useEffect, useState } from "react";
import { pago } from '../../../API/Roles/Commun/Pago.js';

import { useUserContext } from '../../../../context/UserProvider';

const Pago = () => {

const {user, setUser, logOut} = useUserContext()
    const codAdmin = 120507200;

    const [servicios, setServicios] = useState()

    useEffect(() => {
        pago(codAdmin)
        .then(res => res.json())
        .then(res => {
                console.log(res)

                setServicios(res.pagos)
            })
    }, [])

    console.log(servicios)
  return (
    <div className='Pago-wrapper'>
        <div className='button-back-perfil'>
            <p>
                REGRESAR
            </p>
        </div>
        <div className='pago-container'>
            <div className='pago-container__info-perfil'>
                <p>Ec Nombrado</p>
                {/* <p className='pago-container__info-perfil__bg'>120507200</p> */}
                <p className='pago-container__info-perfil__bg'>{codAdmin}</p>
                <p className='pago-container__info-perfil__bg'>{user.nombre}</p>
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
                       !servicios ? 'Cargando...' : servicios.map((pago) =>
                            <tr className='content-info'>
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
                    <p className='sub-total'>S/ 2324.765</p>
                </div>
                
                <table>
                    <tbody>
                    {
                       !servicios ? 'Cargando...' : servicios.map((pago) =>
                            <tr className='content-pago-devolucion'>
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
                    <p className='sub-total'>S/ 2324.765</p>
                </div>

                <hr className='dashed'/>
                <hr className='dashed'/>

            </section>
        </div>

    </div>
  )
}

export default Pago