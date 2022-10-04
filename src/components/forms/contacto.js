import React from 'react';

import { GrPhone, GrLocation, GrFormClock } from "react-icons/gr"

const Contacto = () => {
  return (
    <div className='contacto-wrapper'> 
        <div className='form-container'>
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
            </form>
            <button>Enviar</button>
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
                        San Barja, Lima
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