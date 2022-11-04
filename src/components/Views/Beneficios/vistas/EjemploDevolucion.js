import React from 'react'

const EjemploDevolucion = () => {
  return (
    <div>
        <h3>EJEMPLO: Cálculo de la Devolución de aportes</h3>
        <p>El beneficio se percibirá calculando el último aporte multiplicado por los meses aportados al FSCEC; debiendo precisarse que para dicho cálculo se tomará en consideración el aporte actualizado.</p>
        <p>
            <span>Último aporte 3.5%:</span>
            <span style={{marginLeft:'100px'}}>S/ 22.50</span>
        </p>
        <p>Meses aportados al FSCEC= 150 (12 años, 06 meses)</p>
        <p>S/ 22.50 x 150 = S/ 3,375.00</p>

    </div>
  )
}

export default EjemploDevolucion