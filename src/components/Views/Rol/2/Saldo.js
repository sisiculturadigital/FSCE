import React from 'react'
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import { saldo } from '../../../API/Roles/Commun/Saldo.js';

import { useUserContext } from '../../../../context/UserProvider';

const Saldo = () => {

const {user, setUser, logOut} = useUserContext()
    const codAdmin = 806964600;

    const [servicios, setServicios] = useState()

    useEffect(() => {
        saldo(codAdmin)
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
>

            <section className='pago-container__Concepto_Pago'>
                <table>
                    <thead>
                        <tr className='border_thead'>
                            <th>Concepto Pago</th>
                            <th>Fecha</th>
                            <th>F.Giro/Transferencia</th>
                        </tr>
                    </thead>
                </table>

                <div className='concepto-pago-sub-total'>
                    <p>Sub. Total Girado / Transferencia</p>
                </div>
                

                <hr className='dashed'/>
                <hr className='dashed'/>

            </section>
        </div>

    </div>
  )
}

export default Saldo