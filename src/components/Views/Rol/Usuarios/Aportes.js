import React from 'react'
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import { aportes } from '../../../API/Roles/Commun/Aportes.js';
import useMediaQuery from './useMediaQuery.js';

import { useUserContext } from '../../../../context/UserProvider';
import Polygon from '../../../../imgs/Layout/NavBar/Polygon.png'

const Pago = () => {
    
    const {datosPersona, token} = useUserContext()

    const codAdm = 806964600;

    const [servicios, setServicios] = useState()
    const [minYear, setMinYear] = useState()
    const [arrYear, SetArrYear] = useState()

    const matches = useMediaQuery("(min-width: 1060px)");


    useEffect(() => {
        aportes(codAdm , token)
        .then(res => res.json())
        .then(res => {
            console.log('res', res)
            console.log('datosPersona', datosPersona)


            let arr = res.aportes
            setServicios(res)
            setMinYear(arr.map((aporte) => parseInt(aporte.aaApa)))

            const xxl = arr.map((aporte) => parseInt(aporte.aaApa))
            const mySet2 = [... new Set(xxl)]

            const arrYearMap = (mySet2.sort(function(a, b){return a - b}))

            SetArrYear(arrYearMap)

        })
    }, [])

    function detalleAporteValueImpApoLiq (year , value) {

        const result = ((servicios.aportes).filter((aporte) =>( parseInt(aporte.aaApa) === year && (aporte.mmApa) === value) ))

        const valueImpApoLiq = result.length === 0 ? '': result[0].impApoLiq

        return valueImpApoLiq
    }

    function detalleAporteTotalYearValueImpApoLiq (year) {

        const result = ((servicios.aportes).filter((aporte) =>( parseInt(aporte.aaApa) === year )).map(e => parseFloat(e.impApoLiq))).reduce((previousValue, currentValue) => previousValue + currentValue)
        
        return result.toFixed(2)
    }

    function detalleAporteTotalNumCuota (year , value) {

        const result = ((servicios.aportes).filter((aporte) =>( parseInt(aporte.aaApa) === year) ))
        
        return result.length
    }

    function DesplegarMenu (index){

        let nav = document.querySelector(`#h3_container_${index}`)

        let menu = nav.nextElementSibling

        if(menu.clientHeight === 0){
          menu.style.height = `${menu.scrollHeight}px`
        }
        else{
          menu.style.height = `0px`
        }
    }


    return (

    <div>

        {matches ? 

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
                        <span>{datosPersona.situacion}</span>
                    </div>

                    <div className='datos-personales'>
                    <span className='title'>Cargo</span>
                    <span className='dato'>{datosPersona.grado}</span>
                    <span className='title'>Nº DNI</span>
                    <span>{datosPersona.dni}</span>
                    <span className='title fecha'>Fec. NomBram</span>
                    <span>{(datosPersona.fechIngreso).replace('T00:00:00.000+00:00', '')}</span>
                    <span className='title fecha'>Fec. de baja Ep</span>
                    <span></span>
                </div>

                <div className='datos-personales'>
                    <span className='title fecha'>F. Alta Aportante</span>
                    <span></span>
                </div>

                </section>

                <section className='prestamo-saldo-pendiente'>
                    <div className='prestamo-saldo-pendiente__title'>
                        PERIODO {minYear && Math.min(...minYear) }
                    </div>

                    <div className='container-info-prestamo'>
                        <div>
                            <table className='container-info-prestamo__table'>
                                <thead>
                                    <tr className='border_thead'>
                                        <th></th>
                                        <th>ENER</th>
                                        <th>FEBRERO</th>
                                        <th>MARZO</th>
                                        <th>ABRIL</th>
                                        <th>MAYO</th>
                                        <th>JUNIO</th>
                                        <th>JULIO</th>
                                        <th>AGOSTO</th>
                                        <th>SETIEMBRE</th>
                                        <th>OCTUBRE</th>
                                        <th>NOVIEMBRE</th>
                                        <th>DICIEMBRE</th>
                                        <th>IMPORTE S/.</th>
                                        <th>N°</th>
                                    </tr>
                                    <tr height="15" ></tr>
                                </thead>
                                {
                                    !servicios ? 'Cargando...' : arrYear.map((year , index) =>
                                        <tbody key={index}>
                                            <tr className='content-info'>
                                                <th>{year}</th>
                                                <th>{detalleAporteValueImpApoLiq(year, "1")}</th>
                                                <th>{detalleAporteValueImpApoLiq(year, "2")}</th>
                                                <th>{detalleAporteValueImpApoLiq(year, "3")}</th>
                                                <th>{detalleAporteValueImpApoLiq(year, "4")}</th>
                                                <th>{detalleAporteValueImpApoLiq(year, "5")}</th>
                                                <th>{detalleAporteValueImpApoLiq(year, "6")}</th>
                                                <th>{detalleAporteValueImpApoLiq(year, "7")}</th>
                                                <th>{detalleAporteValueImpApoLiq(year, "8")}</th>
                                                <th>{detalleAporteValueImpApoLiq(year, "9")}</th>
                                                <th>{detalleAporteValueImpApoLiq(year, "10")}</th>
                                                <th>{detalleAporteValueImpApoLiq(year, "11")}</th>
                                                <th>{detalleAporteValueImpApoLiq(year, "12")}</th>
                                                <th>{detalleAporteTotalYearValueImpApoLiq(year)}</th>
                                                <th>{detalleAporteTotalNumCuota(year)}</th>
                                            </tr>
                                            <tr height="5" ></tr>
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


                                <tr className='content-info-total'>
                                    <th colspan="12" align='right'></th>
                                    <th className='total'>Sub Total</th>
                                    <th>{servicios && servicios.subTotalAportes}</th>
                                    <th>{servicios && servicios.subTotalCuotas}</th>
                                </tr>

                                <tr className='content-info-total'>
                                    <th colspan="12" align='right'></th>
                                    <th className='total'>Total</th>
                                    <th>{servicios && servicios.totalAportes}</th>
                                    <th>{servicios && servicios.totalCuotas}</th>
                                </tr>

                            </table>
                        </div>
                    </div>
                </section>
            </div>


        :

        <div className='Aportes-wrapper-media'>
             <div className='button-back-perfil'>
                <Link to={"/inicio"}>
                    <p>REGRESAR</p>
                </Link>
            </div>

            <div className='title'>
                        SITUACIÓN FINANCIERA
            </div>

            <h3 className='h3_datos-personales'>Datos Personales</h3>
            
            <div className='total-container'>
                <div className='total-container__child'>
                    <div className='child_key_response'>Nombre</div>
                    <div className='child_value_response'>{datosPersona.nombreApe}</div>
                </div>

                <div className='total-container__child'  >
                    <div className='child_key_response'>Nº CPI</div>
                    <div className='child_value_response'></div>
                </div>
                <div className='total-container__child' >
                    <div className='child_key_response'>Cargo</div>
                    <div className='child_value_response'>{datosPersona.grado}</div>
                </div>
                <div className='total-container__child' >
                    <div className='child_key_response'>Nº DNI</div>
                    <div className='child_value_response'>{datosPersona.dni}</div>
                </div>
                <div className='total-container__child' >
                    <div className='child_key_response'>Fec. NomBram</div>
                    <div className='child_value_response'>{(datosPersona.fechIngreso).replace('T00:00:00.000+00:00', '')}</div>
                </div>
                <div className='total-container__child' >
                    <div className='child_key_response'>Fec. de baja Ep</div>
                    <div className='child_value_response'></div>
                </div>
            </div>

            <div className='title'>PERIODO {minYear && Math.min(...minYear) }</div>

            {
                !servicios ? 'Cargando...' : arrYear.map((year , index) =>

                <div className='total-container'>

                    <div className='h3_container' id={`h3_container_${index}`}
                        onClick={()=>{DesplegarMenu(index)}}>
                        <h3>{year}</h3>
                        <div className='img_container'><img src={Polygon} alt="arrow" /></div>
                    </div>

                    <div className='total-container__father'>

                        <div className='total-container__child' >
                            <div className='child_key'>ENERO</div>
                            <div className='child_value'>{detalleAporteValueImpApoLiq(year, "1")}</div>
                        </div>
                        <div className='total-container__child' >
                            <div className='child_key'>FEBRERO</div>
                            <div className='child_value'>{detalleAporteValueImpApoLiq(year, "2")}</div>
                        </div>
                        <div className='total-container__child' >
                            <div className='child_key'>MARZO</div>
                            <div className='child_value'>{detalleAporteValueImpApoLiq(year, "3")}</div>
                        </div>
                        <div className='total-container__child' >
                            <div className='child_key'>ABRIL</div>
                            <div className='child_value'>{detalleAporteValueImpApoLiq(year, "4")}</div>
                        </div>
                        <div className='total-container__child' >
                            <div className='child_key'>MAYO</div>
                            <div className='child_value'>{detalleAporteValueImpApoLiq(year, "5")}</div>
                        </div>
                        <div className='total-container__child' >
                            <div className='child_key'>JUNIO</div>
                            <div className='child_value'>{detalleAporteValueImpApoLiq(year, "6")}</div>
                        </div>
                        <div className='total-container__child' >
                            <div className='child_key'>JULIO</div>
                            <div className='child_value'>{detalleAporteValueImpApoLiq(year, "7")}</div>
                        </div>
                        <div className='total-container__child' >
                            <div className='child_key'>AGOSTO</div>
                            <div className='child_value'>{detalleAporteValueImpApoLiq(year, "8")}</div>
                        </div>
                        <div className='total-container__child' >
                            <div className='child_key'>SETIEMBRE</div>
                            <div className='child_value'>{detalleAporteValueImpApoLiq(year, "9")}</div>
                        </div>
                        <div className='total-container__child' >
                            <div className='child_key'>OCTUBRE</div>
                            <div className='child_value'>{detalleAporteValueImpApoLiq(year, "10")}</div>
                        </div>
                        <div className='total-container__child' >
                            <div className='child_key'>NOVIEMBRE</div>
                            <div className='child_value'>{detalleAporteValueImpApoLiq(year, "11")}</div>
                        </div>
                        <div className='total-container__child' >
                            <div className='child_key'>DICIEMBRE</div>
                            <div className='child_value'>{detalleAporteValueImpApoLiq(year, "12")}</div>
                        </div>
                   
                        <div style={{display:'flex', flexDirection:'column', gap:'10px', margin: '10px'}}>
                            <div className='total-container__child child2'>
                                <div className='child_key'>Import S/</div>
                                <div className='child_value'>{detalleAporteTotalYearValueImpApoLiq(year)}</div>
                            </div>

                            <div className='total-container__child child2' >
                                <div className='child_key'>Numero</div>
                                <div className='child_value'>{detalleAporteTotalNumCuota(year)}</div>
                            </div>
                        </div>

                    </div>


                </div>
            )}


            <table className='total_container-x' >

                <tr className='content-info-total'>
                    <th></th>
                    <th className='key_info'>Importe</th>
                    <th className='key_info'>Número</th>
                </tr>
                <tr className='content-info-total'>

                    <th className='key_info'>Sub Total</th>
                    <th>{servicios && servicios.subTotalAportes}</th>
                    <th>{servicios && servicios.subTotalCuotas}</th>
                </tr>
                <tr className='content-info-total'>

                    <th className='key_info'>Total</th>
                    <th>{servicios && servicios.totalAportes}</th>
                    <th>{servicios && servicios.totalCuotas}</th>
                </tr>

            </table>


        </div>


        
        }



    </div>     

)}


export default Pago