import React from 'react'
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import { pago } from '../../../API/Roles/Commun/Pago.js';

import { useUserContext } from '../../../../context/UserProvider';
import useMediaQuery from './useMediaQuery.js';

const Pago = () => {

    const {datosPersona, token} = useUserContext()
    const matches = useMediaQuery("(min-width: 700px)");

    
    const [servicios, setServicios] = useState(null)
    const codAdmin = datosPersona.codAdm;
        

    useEffect(() => {
        pago(codAdmin, token)
        .then(res => res.json())
        .then(res => {
                console.log(res)
                if( res.codAdm !== null ) {
                    setServicios(res)
                }
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
                <p className='ec-nombrado'>Ec Nombrado</p>
                { datosPersona && <p className='pago-container__info-perfil__bg'>{datosPersona.codAdm}</p> }

                <p className='pago-container__info-perfil__bg'>{datosPersona.nombreApe}</p>
            </div>

            {matches ? 

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
                       servicios &&(servicios.pagos).map((pago, index) =>
                            <tr className='content-info' key={index}>
                                <th>{pago.concepto}</th>
                                <th>{pago.fechChe}</th>
                                <th>{pago.importe}</th>
                            </tr>
                        ) 
                    }
                    </tbody>
                </table>

                <div className='sub-total-girado'>
                    <span>Sub. Total Girado / Transferencia</span>
                    <span>{ servicios &&   `S/ ${servicios.pagoTotal}` } </span>
                </div>
                
                <table>
                    <tbody>
                    {
                       servicios &&(servicios.devoluciones).map((pago, index) =>
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
                    <p>
                        { servicios &&<span className='sub-total'>S/ {servicios.devolucionTotal}</span> }
                    </p>
                </div>
                <div className='concepto-pago-sub-total'>
                    <p>Total Girado / Transferencia</p>
                    <p>
                        { servicios &&<span className='sub-total'>S/ {servicios.totalTransferido}</span> }
                    </p>
                </div>

                <hr className='dashed'/>
                <hr className='dashed'/>

            </section>

            :
            
            <section className='pago-container__Concepto_Pago_media'>
                <table>
                    {
                        servicios &&(servicios.pagos).map((pago, index) =>
                        <tbody key={index}>
                                <tr className='content-info' >
                                    <th>Concepto Pago</th>
                                    <th>{pago.concepto}</th>
                                </tr>
                                <tr className='content-info'>
                                    <th>Fecha</th>
                                    <th>{pago.fechChe}</th>

                                </tr>
                                <tr className='content-info'>
                                    <th>F.Giro/Transferencia</th>
                                    <th>{pago.importe}</th>
                                </tr>
                        </tbody>
                        ) 
                    }
                </table>

                <div className='sub-total-girado'>
                    <span>Sub. Total Girado / Transferencia</span>
                    <span>{servicios && `S/ ${servicios.pagoTotal}` } </span>
                </div>
                
                <table>

                {
                    servicios &&(servicios.devoluciones).map((pago, index) =>
                    
                    <table className='content-pago-devolucion' key={index}>
                        <thead>
                            <tr>{pago.concepto}</tr> 
                        </thead>
                        <tbody>
                            <tr>
                                <th>Fecha</th>
                                <th>{pago.fechChe}</th>
                            </tr>
                            <tr>
                                <th>F.Giro/Transferencia</th>
                                <th>{pago.importe}</th>
                            </tr>
                        </tbody>
                    </table>
                    ) 
                }
 
                </table>
                <div className='concepto-pago-sub-total'>
                    <p>Sub. Total Girado / Transferencia</p>
                    <p>
                        { servicios &&<span className='sub-total'>S/ {servicios.devolucionTotal}</span> }
                    </p>
                </div>
                <div className='concepto-pago-sub-total'>
                    <p>Total Girado / Transferencia</p>
                    <p>
                        { servicios &&<span className='sub-total'>S/ {servicios.totalTransferido}</span> }
                    </p>
                </div>

                <div className='dashed_container' >
                    <hr className='dashed'/>
                    <hr className='dashed'/>
                </div>

            </section>
            
            










            }

        </div>




 

    </div>
  )
}

export default Pago