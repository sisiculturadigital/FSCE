import React from 'react'

const CartaDeclaratoria = () => {
  return (
    <div className='CartaDeclaratoria'>
        <h3>CARTA DECLARATORIA</h3>
        <p>Es un documento <span>MUY IMPORTANTE</span> en el cual el cual el socio registra a los beneficiarios del Seguro de Cesación y sirve para determinar el pago del beneficio en caso del fallecimiento del miembro aportante al FSCPC.</p>
        <p>Es importante mantener actualizada la Carta Declaratoria a fin de que su ejecución sea la voluntad actual del socio.</p>
        <h3>TRAMITE CARTA DECLARATORIA</h3>
        <ol>
            <li><p>El formato en nuestras oficinas del CGE, en las Sedes a nivel nacional o descargar en nuestro portal web: www.fsryc.com.pe</p></li>
            <li><p>Debe colocar sus datos personales y luego la de sus beneficiarios, firmar correctamente, la letra debe ser legible y en imprenta.</p></li>
            <li><p>Dicho documento deberá ser entrega al personal del Departamento de FSRyC, quien colocará el dicho documento en un sobre y procederá a lacrar el sobre.</p></li>
            <li><p>Si Ud. quiere ya cobró el adelanto del beneficio y desea actualizar su Carta Declaratoria, deberá presentar debidamente legalizada ante Notario Público.</p></li> 
        </ol>
        <div className='important'>
            <i className="fa-solid fa-circle-exclamation"></i>
            <p> El miembro aportante podrá efectuar la actualización de la Carta Declaratoria cuando crea conveniente. Debe tener en cuenta que en caso de fallecimiento el pago se efectuará a las personas que figuren en dicha Carta.</p>
        </div>

    </div>
  )
}

export default CartaDeclaratoria
