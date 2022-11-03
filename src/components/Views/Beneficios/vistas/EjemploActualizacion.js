import React from 'react'

const EjemploActualizacion = () => {
  return (
    <div className='EjemploActualizacion'>
        <h3>EJEMPLO: Cálculo de la Actualización del Adelanto al 28%</h3>

        <table>
            <tr>
                <th>Datos:</th>
                <th>Anterior</th>
                <th>Actual</th>
            </tr>

            <tr>
                <td>RPC =</td>
                <td>S/ 650.00</td>
                <td>S/ 720.00</td>
            </tr>

            <tr>
                <td>Años =</td>
                <td>30 varones, 25 damas</td>
            </tr>
        </table>

        <p>De acuerdo a la fórmula del Adelanto se proyecta un pago del Seguro:</p>

        <table>
            <tr>
                <th>Anterior</th>
                <th></th>
            </tr>

            <tr>
                <td>Varones:</td>
                <td>S/ 650.00 x 30 = S/ 19,500.00</td>
            </tr>
            <tr>
                <td></td>
                <td>S/ 19,500.00 x 28%= S/ 5,460.00</td>
            </tr>
            <tr>
                <td>Damas:</td>
                <td>S/ 650.00 x 25 = S/ 16,250.00</td>
            </tr>
            <tr>
                <td></td>
                <td>S/ 16,250.00 x 28%= S/ 4,550.00</td>
            </tr>
            
            {/* Nuevo */}

            <tr>
                <th>Nuevo</th>
                <th></th>
            </tr>

            <tr>
                <td>Varones:</td>
                <td>S/ 720.00 x 30 = S/ 21,600.00</td>
            </tr>
            <tr>
                <td></td>
                <td>S/ 21,600.00x 28%= S/ 6,048.00</td>
            </tr>

            <tr>
                <td>Damas:</td>
                <td>S/ 720.00 x 25 = S/ 18,000.00</td>
            </tr>
            <tr>
                <td></td>
                <td>S/ 18,000.00 x 28%= S/ 5,040.00</td>
            </tr>

        </table>

        <p>El importe de la actualización del adelanto (reintegro) es la diferencia entre el nuevo cálculo y el anterior:</p>

        <table>
            <tr>
                <td>Varones:</td>
                <td>S/ 720.00 x 25 = S/ 18,000.00</td>
            </tr>
            <tr>
                <td></td>
                <td>S/ 18,000.00 x 28%= S/ 5,040.00</td>
            </tr>
        </table>




    </div>
  )
}

export default EjemploActualizacion