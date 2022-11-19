import React from 'react'
import { Link } from 'react-router-dom';
import { useEffect, useState, useRef } from "react";
import { useUserContext } from '../../../../context/UserProvider';
import { consultaPrestamosPorPersona , consultaDetallePago } from '../../../API/Roles/Commun/Saldo.js';
import DetalleSaldo from './DetalleSaldo';
import escudo from "../../../../imgs/Layout/NavBar/escudo.png";



const Saldo = () => {
    
    const {user, setUser, logOut, isAuth, setIsAuth, datosPersona, setDatosPersona} = useUserContext()
    const [consultaPrestamo, SetConsultaPrestamo] = useState(null)
    const [idDetalle, setIdDetalle] = useState(null)
    const container = useRef(null)

    
    console.log('datosPersona', datosPersona.codAdm, datosPersona.dni)
    
    const dni = 44234811;
    const codAdm = 622999900;


    function scrollToSection(elementRef){
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: 'smooth'
        })
    }


    useEffect(() => {
        consultaPrestamosPorPersona(dni)
        .then(res => res.json())
        .then(res => {
            console.log('consultaPrestamosPorPersona', res)
            SetConsultaPrestamo(res)
        })

     
    }, [])


    // function showDetalle (nroChe) {
    //     console.log(nroChe)
    //     let x = document.getElementsByClassName('consultaDetallePago')
    //     console.log(x[0].innerHTML)
    //     let template = `
    //     `

    // }

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
                            <th>{datosPersona && datosPersona.codAdm}</th>
                            <th>{datosPersona && datosPersona.grado}</th>
                            <th>{datosPersona && datosPersona.nombreApe}</th>
                            <th>{datosPersona && datosPersona.edad}</th>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section className='prestamo-saldo-pendiente'>
                <div className='prestamo-saldo-pendiente__title'>
                    RELACIÓN DE PRESTAMOS OTORGADOS CON SALDO PENDIENTE
                </div>
                {
                    consultaPrestamo && consultaPrestamo.map((element, index) =>
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
                                            <th>{element.codigoPrestamo}</th>
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
                                            <th>{element.impApo}</th>
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
                                       element.prestamos &&  (element.prestamos).map((elm, index) =>
                                            <tbody key={index}>
                                                <tr className='content-info'>
                                                    <th>{elm.nroChe}</th>
                                                    <th>{elm.impSol}</th>
                                                    <th>{elm.fecAprob.replace('T00:00:00.000+00:00', '')}</th>
                                                    <th>{elm.nroCuo}</th>
                                                    <th>7,999.99</th>
                                                    <th>8720.00</th>
                                                    <th>{elm.refinancia}</th>
                                                    <th className='button-detalle' onClick={ ()=>{
                                                        container.current.style.display='block'
                                                        scrollToSection(container)
                                                        setIdDetalle(elm.nroChe)
                                                        } }>
                                                        DETALLE
                                                    </th>
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

            <div ref={container}  style={{display:'none'}} >
                <DetalleSaldo datosPersona={datosPersona} idDetalle={idDetalle}  />
            </div>

 

        
            {/* <div className='consultaDetallePago'>
                <center>
                    <img src={escudo} alt="" width="120"/>
                </center>
                <div className='consultaDetallePago__table'>
                    <div className='consultaDetallePago__table__row'>
                        <div className='consultaDetallePago__table__row__header'>CÓDIGO</div>
                        <div className='consultaDetallePago__table__row__response'>{datosPersona && datosPersona.codAdm}</div>
                    </div>
                    <div className='consultaDetallePago__table__row'>
                        <div className='consultaDetallePago__table__row__header'>GRADO</div>
                        <div className='consultaDetallePago__table__row__response'>{datosPersona && datosPersona.grado}</div>
                    </div>
                    <div className='consultaDetallePago__table__row'>
                        <div className='consultaDetallePago__table__row__header'>DNI</div>
                        <div className='consultaDetallePago__table__row__response'>{datosPersona && datosPersona.dni}</div>
                    </div>
                    <div className='consultaDetallePago__table__row'>
                        <div className='consultaDetallePago__table__row__header'>APELLIDOS Y NOMBRES</div>
                        <div className='consultaDetallePago__table__row__response'>{datosPersona && datosPersona.nombreApe}</div>
                    </div>
                    <div className='consultaDetallePago__table__row'>
                        <div className='consultaDetallePago__table__row__header'>EDAD</div>
                        <div className='consultaDetallePago__table__row__response'>{datosPersona && datosPersona.edad}</div>
                    </div>
                </div>
                <div className='consultaDetallePago__table'>
                    <div className='consultaDetallePago__table__row'>
                        <div className='consultaDetallePago__table__row__header title'>DETALLE DE PAGO</div>
                    </div>
                </div>
                {
                    detallePago && detallePago.map((pago, index) =>
                    <div className='consultaDetallePago__table' key={index}>
                        <div className='consultaDetallePago__table__row'>
                            <div className='consultaDetallePago__table__row__header'>CÓDIGO</div>
                            <div className='consultaDetallePago__table__row__response'>{pago.codAdm}</div>
                        </div>
                        <div className='consultaDetallePago__table__row'>
                            <div className='consultaDetallePago__table__row__header'>AÑO</div>
                            <div className='consultaDetallePago__table__row__response'>{pago.aaCuo}</div>
                        </div>
                        <div className='consultaDetallePago__table__row'>
                            <div className='consultaDetallePago__table__row__header'>MES</div>
                            <div className='consultaDetallePago__table__row__response'>{pago.mmCuo}</div>
                        </div>
                        <div className='consultaDetallePago__table__row'>
                            <div className='consultaDetallePago__table__row__header'>NRO</div>
                            <div className='consultaDetallePago__table__row__response'>{pago.nroChe}</div>
                        </div>
                        <div className='consultaDetallePago__table__row'>
                            <div className='consultaDetallePago__table__row__header'>N° CUOTAS</div>
                            <div className='consultaDetallePago__table__row__response'>{pago.nroCuo}</div>
                        </div>
                        <div className='consultaDetallePago__table__row'>
                            <div className='consultaDetallePago__table__row__header'>IMPORTE CUOTAS</div>
                            <div className='consultaDetallePago__table__row__response'>{pago.impCuCap}</div>
                        </div>
                        <div className='consultaDetallePago__table__row'>
                            <div className='consultaDetallePago__table__row__header'>IMPORTE PAGO</div>
                            <div className='consultaDetallePago__table__row__response'>{pago.impPago}</div>
                        </div>
                        <div className='consultaDetallePago__table__row'>
                            <div className='consultaDetallePago__table__row__header'>TIPO DE PAGO</div>
                            <div className='consultaDetallePago__table__row__response'>{pago.tipoPago}</div>
                        </div>
                        <div className='consultaDetallePago__table__row'>
                            <div className='consultaDetallePago__table__row__header'>SITUACIÓN</div>
                            <div className='consultaDetallePago__table__row__response'>{pago.situacion}</div>
                        </div>
                        <div className='consultaDetallePago__table__row'>
                            <div className='consultaDetallePago__table__row__header'>IMPORTE CUOTA INT</div>
                            <div className='consultaDetallePago__table__row__response'>{pago.impCuoInt}</div>
                        </div>
                        <div className='consultaDetallePago__table__row'>
                            <div className='consultaDetallePago__table__row__header'>IMPORTE CUOTA</div>
                            <div className='consultaDetallePago__table__row__response'>{pago.impCuo}</div>
                        </div>
                    </div>
                )}


            </div> */}


            <div className='dowloand-saldo'>
                <a href="https://backend-app-v1.herokuapp.com/publico/pdf/80467508">
                    <p>DESCARGAS</p>
                </a>
            </div>
        </div>
    )
}

export default Saldo