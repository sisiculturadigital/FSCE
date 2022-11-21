import React from 'react'

const TramiteActualizacion = () => {
  return (
    <div className='TramiteActualizacion'>
        <h3>Trámite de la Actualización del Adelanto Beneficio FSCPC</h3>
        <ol>
            <li>Presentar DNI original.</li>
            <li>Completar formato de solicitud del FSCEC.</li>
            <li>Adjuntar los siguientes documentos:
                <ul>
                    <li>- Carta declaratoria legalizada ante Notario Público.</li>
                    <li>- Copia autenticada por el COPERE de la Tarjeta de Personal con una antigüedad no mayor de 3 meses (para verificar que no haya cesado).</li>
                    <li>- Copia simple de DNI de los beneficiarios si son menores de edad.</li>
                </ul>
            </li>
        </ol>
        <div className='important'>
            <i className="fa-solid fa-circle-exclamation"></i>
            <p> Adicionalmente en todos los casos se solicitará y actualizará el número de teléfono, dirección domiciliaria y correo electrónico.</p>
        </div>
    </div>
  )
}

export default TramiteActualizacion