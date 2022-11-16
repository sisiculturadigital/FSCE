import React from 'react'
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import { aportes } from '../../../API/Roles/Commun/Aportes.js';

import { useUserContext } from '../../../../context/UserProvider';

const Pago = () => {
    
    const {user, setUser, logOut} = useUserContext();

    const codAdm = 806964600;

    const [servicios, setServicios] = useState()
    const [minYear, setMinYear] = useState()
    const [arrYear, SetArrYear] = useState()

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
                        </table>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Pago