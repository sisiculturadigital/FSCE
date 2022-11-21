import React, { useState } from 'react'
import { useEffect } from 'react';
import escudo from "../../../../imgs/Layout/NavBar/escudo.png";
import { consultaPrestamosPorPersona , consultaDetallePago } from '../../../API/Roles/Commun/Saldo.js';
import useMediaQuery from './useMediaQuery.js';


const DetalleSaldo = ({ datosPersona=[{}] }) => {

  const [detallePago, setDetallePago] = useState([{}])
  const matches = useMediaQuery("(min-width: 1110px)");



  const codAdm = '622999900';
  const idDetalle = '10339868-2017-3'


  useEffect(()=>{
    consultaDetallePago(codAdm, idDetalle)
    .then(response => response.json())
    .then(data => setDetallePago(data));
  },[idDetalle])


  console.log(detallePago)

  return (

<div>
    {
        matches?
      
        
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

            <div className='dowloand-saldo'>
                <a href="https://backend-app-v1.herokuapp.com/publico/pdf/622999900/80467508/10339868-2017-3">
                    <p>DESCARGAS</p>
                </a>
            </div>
      
      </div>

      :
        <div className='consultaDetallePago_media'>

            <center>
                <img src={escudo} alt="" width="120"/>
            </center>

            <div style={{borderBottom:'1px solid rgba(70, 78, 95, 1)'}}>
                <div className='consultaDetallePago_media__child' >
                    <p>CÓDIGO</p>
                    <p>{datosPersona && datosPersona.codAdm}</p>
                </div>
                <div className='consultaDetallePago_media__child'>
                    <p>GRADO</p>
                    <p>{datosPersona && datosPersona.grado}</p>
                </div>
                <div className='consultaDetallePago_media__child' >
                    <p>DNI</p>
                    <p>{datosPersona && datosPersona.dni}</p>
                </div>
                <div className='consultaDetallePago_media__child' >
                    <p>APELLIDOS Y NOMBRES</p>
                    <p>{datosPersona && datosPersona.nombreApe}</p>
                </div>
                <div className='consultaDetallePago_media__child' >
                    <p>EDAD</p>
                    <p>{datosPersona && datosPersona.edad}</p>
                </div>
            </div>


            <h2>DETALLE PAGO</h2>

            {detallePago && detallePago.map((pago, index) =>

                <div style={{borderBottom:'1px solid rgba(70, 78, 95, 1)'}}>

                    <div className='consultaDetallePago_media__child' >
                        <p>CÓDIGO</p>
                        <p>{pago.codAdm}</p>
                    </div>
                    <div className='consultaDetallePago_media__child' >
                        <p>AÑO</p>
                        <p>{pago.aaCuo}</p>
                    </div>
                    <div className='consultaDetallePago_media__child' >
                        <p>MES</p>
                        <p>{pago.mmCuo}</p>
                    </div>
                    <div className='consultaDetallePago_media__child' >
                        <p>NRO</p>
                        <p>{pago.nroChe}</p>
                    </div>
                    <div className='consultaDetallePago_media__child' >
                        <p>N° CUOTAS</p>
                        <p>{pago.nroCuo}</p>
                    </div>
                    <div className='consultaDetallePago_media__child' >
                        <p>IMPORTE CUOTAS</p>
                        <p>{pago.impCuCap}</p>
                    </div>
                    <div className='consultaDetallePago_media__child' >
                        <p>IMPORTE PAGO</p>
                        <p>{pago.impPago}</p>
                    </div>
                    <div className='consultaDetallePago_media__child' >
                        <p>TIPO DE PAGO</p>
                        <p>{pago.tipoPago}</p>
                    </div>
                    <div className='consultaDetallePago_media__child' >
                        <p>SITUACIÓN</p>
                        <p>{pago.situacion}</p>
                    </div>
                    <div className='consultaDetallePago_media__child' >
                        <p>IMPORTE CUOTA INT</p>
                        <p>{pago.impCuoInt}</p>
                    </div>
                    <div className='consultaDetallePago_media__child' >
                        <p>IMPORTE CUOTA</p>
                        <p>{pago.impCuo}</p>
                    </div>

                </div>
            )}

                
            <div className='dowloand-saldo'>
                <a href="https://backend-app-v1.herokuapp.com/publico/pdf/622999900/80467508/10339868-2017-3">
                    <p>DESCARGAS</p>
                </a>
            </div>


        </div>
    }

</div>
)}

export default DetalleSaldo