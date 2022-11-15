import React from 'react'
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import { useUserContext } from '../../../../context/UserProvider';
import { 
    consultaPrestamosPorPersona ,
    consultaDetallePago
} from '../../../API/Roles/Commun/Saldo.js';

const Saldo = () => {
    
    const {user, setUser, logOut} = useUserContext();
    const [consultaPrestamo, SetConsultaPrestamo] = useState()
    const [detallePago, SetDetallePago] = useState()

    const dni = 44234811;
    const codAdm = 622999900;
    const idDetalle = "10339868-2017-3";


    useEffect(() => {
        consultaPrestamosPorPersona(dni)
        .then(res => res.json())
        .then(res => {
            console.log('consultaPrestamosPorPersona', res)
            SetConsultaPrestamo(res)
        })

        consultaDetallePago(codAdm, idDetalle)
        .then(res => res.json())
        .then(res => {
            console.log('consultaDetallePago', res)
            SetDetallePago(res)
            
        })
    }, [])

    return (
        <div className='Saldo-wrapper'>
            <div className='button-back-perfil'>
                <Link to={"/inicio"}>
                    <p>REGRESAR</p>
                </Link>
            </div>
            <section className='situacion-financiera'>
                <div className='situacion-financiera__title'>
                    SITUACIÓN FINANCIERA
                </div>
                <table>
                    <thead>
                        <tr className='border_thead'>
                            <th>Código</th>
                            <th>Cargo</th>
                            <th>Nombre</th>
                            <th>Edad</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='content-info'>
                            <th>#546786</th>
                            <th>Teniente</th>
                            <th>{user.nombre}</th>
                            <th>25</th>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section className='prestamo-saldo-pendiente'>
                <div className='prestamo-saldo-pendiente__title'>
                    RELACIÓN DE PRESTAMOS OTORGADOS CON SALDO PENDIENTE
                </div>
                {
                    !consultaPrestamo ? 'Cargando...' : consultaPrestamo.map((element, index) =>
                        <div className='container-info-prestamo' key={index}>
                            <div className='prestamo-saldo-pendiente__flex'>
                                <table className='width-flex'>
                                    <thead>
                                        <tr className='border_thead'>
                                            <th>Código</th>
                                            <th>Tipo de prestamo</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className='content-info'>
                                            <th>#546786</th>
                                            <th>{element.tipoPrestamo}</th>
                                        </tr>
                                    </tbody>
                                </table>
                                <table className='width-flex'>
                                    <thead>
                                        <tr className='border_thead'>
                                            <th>Saldo aprobado</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className='content-info'>
                                            <th>S/ 20.0000</th>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div>
                                <table>
                                    <thead>
                                        <tr className='border_thead'>
                                            <th>N° PRESTAMO</th>
                                            <th>IMP. SOLICITADO</th>
                                            <th>FECHA</th>
                                            <th>N° CUOTAS</th>
                                            <th>SALDO CAPITAL</th>
                                            <th>SALDO TOTAL</th>
                                            <th>REFINANCIABLE</th>
                                            <th></th>
                                        </tr>
                                        <tr height="15" ></tr>
                                    </thead>
                                    {
                                        (element.prestamos).map((elm, index) =>
                                            <tbody key={index}>
                                                <tr className='content-info'>
                                                    <th>{elm.nroChe}</th>
                                                    <th>{elm.impSol}</th>
                                                    <th>{elm.fecAprob.replace('T00:00:00.000+00:00', '')}</th>
                                                    <th>{elm.nroCuo}</th>
                                                    <th>7,999.99</th>
                                                    <th>8720.00</th>
                                                    <th>{elm.refinancia}</th>
                                                    <th className='button-detalle'>DETALLE</th>
                                                </tr>
                                                <tr height="15" ></tr>
                                            </tbody>
                                        )
                                    }
                                    <tbody>
                                        <tr className='content-info-total'>
                                            <th></th>
                                            <th>8,000.00</th>
                                            <th></th>
                                            <th></th>
                                            <th>7,999.99</th>
                                            <th>8720.00</th>
                                            <th></th>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className='prestamo-saldo-pendiente__prestamo-disponible'>
                                <p>Prestamo</p>
                                <p className='sub-total'>S/ 2,000</p>
                            </div>
                        </div>
                    ) 
                }
            </section>
            <div className='dowloand-saldo'>
                <a href="https://backend-app-v1.herokuapp.com/publico/pdf/80467508">
                    <p>DESCARGAS</p>
                </a>
            </div>
        </div>
    )
}

export default Saldo