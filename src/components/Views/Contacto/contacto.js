import React from 'react';

import { GrPhone, GrLocation, GrFormClock } from "react-icons/gr"

const Contacto = () => {
  return (
    <div className='contacto-wrapper'> 
        
        
        
        {/* <div className='form-container'>
            <h1>Contáctanos</h1>
            <div className='linea-roja'></div>
            <form className='grid-form-wrapper'>                
                <label>Nombre</label>
                <input type='text' id='nombre' name='nombre' /> 

                <label>Email</label>
                <input type='email' id='email' name='email' />

                <label>Celular</label>
                <input type='phone' id='celular' name='celular' />

                <label>Mensaje</label>
                <textarea id='menaje' name='mensaje' />
                <button type='sumbmit'>Enviar</button>
            </form>
        </div> */}

        <div className='sup_section'>

            <figure>
                <img src="https://depor.com/resizer/tWkgaFkRSfQvJrxQJP3zxVe35K4=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/DOSTJYG5PVBK3ELX3UXALXJYPQ.jpg" alt="centros-de-contacto" />
            </figure>


            <div className='formulario_container'>
                <h2>Contáctanos</h2>
                <div className='linea'></div>
                <form className='form-contacto'>                
                
                    <input type='text' id='nombre' name='nombre' placeholder='Nombre' /> 

                    <input type='email' id='email' name='email' placeholder='Email' />

                    <input type='phone' id='celular' name='celular'  placeholder='Celular'/>

                    <input type='text' id='curso' name='curso'  placeholder='Curso'/>

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
                <h2>Lun - Vie: 8:00 am - 12:00 pm</h2>
                <p>
                    Sab 9:00 am - 12:00 pm
                </p>
            </section>
        </div>


    </div>
  );
};

export default Contacto;