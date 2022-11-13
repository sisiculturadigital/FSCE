import React, { useState, useRef } from 'react'
import { FaAngleDown } from 'react-icons/fa'

const initialForm = {
  importe:'',
  cuotas:''
}

const ApoyoEconomico = () => {

  const nav1 = useRef(null), nav2 = useRef(null), nav3 = useRef(null), nav4 = useRef(null)
  const [form, setForm] = useState(initialForm)
  const [dtoAportante, setDtoAportante] = useState(null), [dtoNoAportante, setDtoNoAportante] = useState(null)


  function DesplegarMenu (nav){
    let menu = nav.current.nextElementSibling
    if(menu.clientHeight === 0){
      menu.style.height = `${menu.scrollHeight}px`
    }
    else{
      menu.style.height = `0px`
    }
  }

  const HandleChange = (e) =>{ 
    const {name, value} = e.target
    let valor = value
    valor = valor.replace(/\s/g, '')
                  .replace(/\D/g, '')
                  .trim();
    setForm({
        ...form,
        [name]:valor
    })
  }


  const HandleClick = () =>{
    
    const tasaAportante = 0.5    
    const tasaNoAportante = 0.60125

    let dtoAportante = ((form.importe/form.cuotas)+form.importe*tasaAportante/100)
    let dtoNoAportante = ((form.importe/form.cuotas)+form.importe*tasaNoAportante/100)
    
    setDtoAportante(dtoAportante.toFixed(2))
    setDtoNoAportante(dtoNoAportante.toFixed(2))
  }


  return (
    <div className='ApoyoEconomico'>

      <div className='sup'>
        <h2>Apoyo Económico al personal del Ejercito</h2>  
        <h3>Requisitos</h3>
        <div className='requisitos'>
          <p onClick={()=>{DesplegarMenu(nav1)}} ref={nav1}> <FaAngleDown /> Personal Militar - Actividad</p>
          <ul className='list__show'>
            <li>Documento Nacional de Identidad (DNI)</li>
            <li>Solicitud Apoyo Económico(Anverso y Reverso)</li>
            <li>Autorización de Descuento COPERE</li>
            <li>Autorización de Descuento CPMP (Más de 15 años serv.)</li> 
            <li>Documento no revocatoria CPMP (Más de 15 años serv.)</li> 
          </ul>
          
          <p onClick={()=>{DesplegarMenu(nav2)}} ref={nav2}><FaAngleDown />Personal Civil Actividad FSCPC</p> 
          <ul className='list__show'>
            <li>Documento Nacional de Identidad (DNI)</li>
            <li>Solicitud Apoyo Económico(Anverso y Reverso)</li>
            <li>Autorización de Descuento COPERE</li>
          </ul>

          <p onClick={()=>{DesplegarMenu(nav3)}} ref={nav3}><FaAngleDown />Personal Militar - Retiro CPMP</p>
          <ul className='list__show'>
            <li>Documento Nacional de Identidad (DNI)</li>
            <li>Solicitud Apoyo Económico(Anverso y Reverso)</li>
            <li>Autorización de Descuento CPMP</li>
            <li>Documento no revocatoria CPMP</li>
            <li>Boleta de Pago, mes actual o anterior</li>
            <li>Voucher de cuenta bancaria</li>
            <li>Contrato Fianza (Garantía)</li>
            <li>Documento Nacional de Identidad (DNI) - Garante</li>
            <li>Boleta de Pago - Garante</li>
            <li>Autorización de Descuento COPERE- Garante</li>
          </ul>


          <p onClick={()=>{DesplegarMenu(nav4)}} ref={nav4}><FaAngleDown />Personal Militar/Civil - Régimen de MONTEPIO</p>
          <ul className='list__show' >
            <li> Documento Nacional de Identidad (DNI)</li>
            <li> Solicitud Apoyo Económico(Anverso y Reverso)</li>
            <li> Autorización de Descuento OPREFFAA</li>
            <li> Boleta de Pago, mes actual o anterior</li>
            <li> Voucher de cuenta bancaria</li>
          </ul>

        </div>
      </div>

      <div className='simulador'>
        <h4>SIMULACIÓN DE CUOTA DE PAGO</h4>
        <div>
          <label htmlFor="importe">Importe S/:</label>
          <input id='importe' type="text" autoComplete='off' name='importe' value={form.importe} 
            onChange={HandleChange} />
        </div>

        <div>
          <label className='label' htmlFor="cuotas">Número Cuotas:</label>
          <input id='cuotas' type="text" autoComplete='off' name='cuotas' value={form.cuotas}
           onChange={HandleChange}  />
        </div>

        <input type='button' value='Calcular' onClick={HandleClick} />
        <p>Dscto. No aportante al FSCPC: <span>{ dtoNoAportante !==  'NaN' && dtoNoAportante !==  'Infinity' &&  dtoNoAportante }</span></p>
        <p>Dscto. Aportante al FSCP: <span>{ dtoAportante !==  'NaN' && dtoAportante !==  'Infinity' &&  dtoAportante }</span></p>
      </div>


    </div>
  )
}

export default ApoyoEconomico
