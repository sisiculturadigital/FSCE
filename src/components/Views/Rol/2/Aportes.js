import React from 'react'
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import { aportes } from '../../../API/Roles/Commun/Aportes.js';

import { useUserContext } from '../../../../context/UserProvider';

const Pago = () => {
    
    const {user, setUser, logOut, isAuth, setIsAuth, datosPersona, setDatosPersona} = useUserContext()

    const codAdm = 806964600;

    const [servicios, setServicios] = useState()
    const [minYear, setMinYear] = useState()
    const [arrYear, SetArrYear] = useState()

    console.log(servicios)

    useEffect(() => {
        aportes(codAdm)
        .then(res => res.json())
        .then(res => {
            // console.log(res)
            let arr = res.aportes
            // console.log(arr)
            let xx = arr.map((aporte) => parseFloat(aporte.impApa)).reduce((previousValue, currentValue) => previousValue + currentValue)
            // console.log(xx)
            setServicios(res)
            setMinYear(arr.map((aporte) => parseInt(aporte.aaApa)))


            const xxl = arr.map((aporte) => parseInt(aporte.aaApa))
            const mySet2 = [... new Set(xxl)];
            // console.log(mySet2)

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
                                <th>{servicios && servicios.totalAportes}</th>
                                <th>##</th>
                            </tr>

                            <tr className='content-info-total'>
                                <th colspan="12" align='right'></th>
                                <th className='total'>Total</th>
                                <th>{servicios && servicios.totalCuotas}</th>
                                <th>##</th>
                            </tr>

                        </table>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Pago