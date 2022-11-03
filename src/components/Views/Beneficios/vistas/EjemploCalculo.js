import React from 'react'

const EjemploCalculo = () => {
  return (
    <div className='EjemploCalculo'>
      <h3>EJEMPLO: Cálculo del Adelanto del Beneficio en base al 28%</h3>

      <p className='undeLine'>Datos</p>
      <p>RPC = S/ 650.00</p>
      <p className='space-bottom'>Años = 30 varones o 25 damas</p>

      <p className='undeLine'>Cálculo</p>
      <p>Varones : S/ 650.00 x 30 = S/ 19,500.00</p>
      <p className='space-bottom'>Damas : S/ 650.00 x 25 = S/ 16,250.00</p>

      <p className='space-bottom'>A dicho monto se calcula el porcentaje hasta un máximo del 30%. Para el caso del ejemplo:</p>

      <p>Varones: S/ 19,500.00 x 28%= 5,460.00</p>
      <p>Damas: S/ 16,250.00 x 28%= 4,550.00</p>

  
    </div>
  )
}

export default EjemploCalculo