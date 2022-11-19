import React, { useState } from 'react'
import { useEffect } from 'react';
import escudo from "../../../../imgs/Layout/NavBar/escudo.png";
import { consultaPrestamosPorPersona , consultaDetallePago } from '../../../API/Roles/Commun/Saldo.js';


const DetalleSaldo = ({ datosPersona=[{}] }) => {

  const [detallePago, setDetallePago] = useState([{}])

  const codAdm = '622999900';
  const idDetalle = '10339868-2017-3'


  useEffect(()=>{
    consultaDetallePago(codAdm, idDetalle)
    .then(response => response.json())
    .then(data => setDetallePago(data));
  },[idDetalle])


  console.log(detallePago)

  return (

    <div className='consultaDetallePago'>

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

    </div>


  )
}

export default DetalleSaldo