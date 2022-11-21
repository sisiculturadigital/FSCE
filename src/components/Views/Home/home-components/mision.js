import React from 'react';

//imgs
import misionImg from '../../../../imgs/View/Home/Mision//img-mision.jpg'
 
const Mision = () => {
  return (
    <div className='mision-wrapper'>
        <div className='mision-content'>
            <div className='img-wrapper'>
                <img src={misionImg} alt='img-mision' />
            </div>
            <div className='mision-text'>
                <h1>Misión</h1>
                <p>
                    Contribuir al Bienestar del Personal del Ejército, mediante el otorgamiento de los veneficios del Fondo de Seguro de Cesación,
                    asi como la prestación de servicios financieros de calidad y en las mejores condiciones del mercado promedio.
                </p>
                <a href='#contacto'>
                    Contactános
                </a>
            </div>
        </div>
    </div>
  );
};

export default Mision;