import React from 'react';
import { GrPhone, GrLocation, GrFormClock } from "react-icons/gr"
import './mapView.css'
import MapView from './MapView';

const Contacto = () => {

//  width="640" height="480"

  return (
    <div className='contacto-wrapper'> 

        <div className='sup_section'>
            
            {/* <MapView/> */}
            <div className='iframe-container'>
                <iframe src="https://www.google.com/maps/d/embed?mid=1UF4Nb_yzmq7dyuBi9Q3NUYV38e9sU9Fc&ehbc=2E312F"></iframe>
            </div>

            <div className='formulario_container'>
                <h2>Contáctanos</h2>
                <div className='linea'> <span></span> </div>
                <form className='form-contacto' action= "mailto:atencionalcliente@fsce.pe?subject=Atención al Cliente" enctype ="text/plain"  method="POST"> 

                    <input type='text' id='nombre' placeholder='Nombre' /> 
                    <input type='email' id='email'  placeholder='Email' />
                    <input type='phone' id='celular' placeholder='Celular'/>
                    <input type='text' id='asunto'  placeholder='Asunti'/>
                    <textarea id='mensaje' name='mensaje' />
                    <button type='submit' className='input_type_submit'>Enviar</button>

                </form>
            </div>

        </div>


        <div className='contact-info'>
            <section className='phone'>
                <GrPhone />
                <div>
                    <h2>+51987958344</h2>
                    <p>fsce@ejercitodelperu.pe</p>
                </div>
            </section>
            <section className='ubicacion'>
                <GrLocation />
                <div>
                    <h2>FSCE</h2>
                    <p>
                        Av. Paseo del Bosque S/N
                        <br/>
                        San Borja, Lima
                    </p>
                </div>
            </section>
            <section className='horas'>
                <GrFormClock />
                <h2>Lun - Vie: <br></br>8:00 am - 12:00 pm</h2>
                <p>
                    Sab 9:00 am - 12:00 pm
                </p>
            </section>
        </div>

    </div>
  );
};

export default Contacto;