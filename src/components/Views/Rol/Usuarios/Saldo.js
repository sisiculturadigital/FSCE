import React from 'react'
import { Link } from 'react-router-dom';
import { useEffect, useState, useRef } from "react";
import { useUserContext } from '../../../../context/UserProvider';
import { consultaPrestamosPorPersona } from '../../../API/Roles/Commun/Saldo.js';
import DetalleSaldo from './DetalleSaldo';
import useMediaQuery from './useMediaQuery.js';



const Saldo = () => {
    
    const {datosPersona, token} = useUserContext()
    const [consultaPrestamo, SetConsultaPrestamo] = useState(null)
    const [idDetalle, setIdDetalle] = useState(null)
    const [fechaDetalle, setFechaDetalle] = useState(null)
    const container = useRef(null)

    const matches = useMediaQuery("(min-width: 600px)");
    const matches2 = useMediaQuery("(min-width: 890px)");
        
    const dni = datosPersona.dni;

    function scrollToSection(elementRef){
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: 'smooth'
        })
    }


    useEffect(() => {
        consultaPrestamosPorPersona(dni, token)
        .then(res => res.json())
        .then(res => {
            SetConsultaPrestamo(res)
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

                {
                matches ?
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
                
                :
                    <div className='situacion-financiera-response' >
                        <p className='situacion-financiera-response__p'>Código</p>
                        <p>{datosPersona && datosPersona.codAdm}</p>
                        <p className='situacion-financiera-response__p'>Cargo</p>
                        <p>{datosPersona && datosPersona.nombreApe}</p>
                        <p className='situacion-financiera-response__p'>Nombre</p>
                        <p>{datosPersona && datosPersona.nombreApe}</p>
                        <p className='situacion-financiera-response__p'>Edad</p>
                        <p>{datosPersona && datosPersona.edad}</p>
                    </div>
                }


            </section>

        {
            matches2 ? 

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
                                                    <th></th>
                                                    <th></th>
                                                    <th>{elm.refinancia}</th>
                                                    <th className='button-detalle' onClick={ ()=>{
                                                        container.current.style.display='block'
                                                        scrollToSection(container)
                                                        setIdDetalle(elm.nroChe)
                                                        setFechaDetalle(elm.fecAprob.replace('T00:00:00.000+00:00', ''))
                                                        } }>
                                                        DETALLE
                                                    </th>
                                                </tr>
                                                <tr height="15" ></tr>
                                            </tbody>
                                        )
                                    }
                                </table>
                            </div>
                            {/* <div className='prestamo-saldo-pendiente__prestamo-disponible'>
                                <p>Prestamo</p>
                                <p className='sub-total'></p>
                            </div> */}
                        </div>
                    ) 
                }
            </section>


                :

                <section className='prestamo-saldo-pendiente'>
                <div className='prestamo-saldo-pendiente__title'>
                    RELACIÓN DE PRESTAMOS OTORGADOS CON SALDO PENDIENTE
                </div>

                {
                    consultaPrestamo && consultaPrestamo.map((element, index) =>
                        <div className='container-info-prestamo-response' key={index}>
                            <div className='prestamo-saldo-pendiente__flex'>

                                <div className='situacion-financiera-response' >
                                    <p className='situacion-financiera-response__p'>Código</p>
                                    <p>{element.codigoPrestamo}</p>
                                    <p className='situacion-financiera-response__p'>Tipo de prestamo</p>
                                    <p>{element.tipoPrestamo}</p>
                                    <p className='situacion-financiera-response__p'>Saldo aprobado</p>
                                    <p>{element.impApo}</p>
                                </div>
                               
                            </div>
                           
                            <div className='container-map'>

                                
                                {element.prestamos &&  (element.prestamos).map((elm, index) =>
                                    <div>

                                        <div className='container-map__element' key={index}>

                                            <div className='container-map__element__child' >
                                                <p className='child_key'>N° PRESTAMO</p>
                                                <p className='child_value'>{elm.nroChe}</p>
                                            </div>
                                            <div className='container-map__element__child'>
                                                <p className='child_key'>IMP. SOLICITADO</p>
                                                <p className='child_value'>{elm.impSol}</p>
                                            </div>
                                            <div className='container-map__element__child'>
                                                <p className='child_key'>FECHA</p>
                                                <p className='child_value'>{elm.fecAprob.replace('T00:00:00.000+00:00', '')}</p>
                                            </div>
                                            <div className='container-map__element__child'>
                                                <p className='child_key'>N° CUOTAS</p>
                                                <p className='child_value'>{elm.nroCuo}</p>
                                            </div>
                                            <div className='container-map__element__child'>
                                                <p className='child_key'>SALDO CAPITAL</p>
                                                <p className='child_value'></p>
                                            </div>
                                            <div className='container-map__element__child'>
                                                <p className='child_key'>SALDO TOTAL</p>
                                                <p className='child_value'></p>
                                            </div>
                                            <div className='container-map__element__child'>
                                                <p className='child_key'>REFINANCIABLE</p>
                                                <p className='child_value'>{elm.refinancia}</p>
                                            </div>

                                            <div className='button-container'>
                                                <input type='button' value='Detalle' className='button-detalle'
                                                        onClick={ ()=>{
                                                        container.current.style.display='block'
                                                        scrollToSection(container)
                                                        setIdDetalle(elm.nroChe)
                                                        setFechaDetalle(elm.fecAprob.replace('T00:00:00.000+00:00', ''))
                                                        } } />
                                            </div>
                                        </div>

                                        {/* <div className='prestamo-saldo-pendiente__prestamo-disponible_media'>
                                            <p>Prestamo</p>
                                            <p></p>
                                        </div> */}

                                    </div>
                                )}
                                
                     


                                    
                            </div>
                            
                        </div>
                    ) 
                }
            </section>

        }



            <div ref={container}  style={{display:'none'}} >
                <DetalleSaldo  props = {{datosPersona, idDetalle, fechaDetalle}} />
            </div>

 


        </div>
    )
}

export default Saldo