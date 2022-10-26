import React from 'react';

const Institucional = () => {
  return (
    <div className='institucional-wrapper'>
        <div className='mision-vision'>
          <h1>Mision</h1>
          <p>
          Contribuir al Bienestar del Personal del Ejército, mediante el otorgamiento de los beneficios del Fondo de Seguro de 
          Cesación, así como la prestación de servicios financieros de calidad y en las mejores condiciones del mercado promedio.
          </p>
          <h1>Funcion</h1>
          <p>Administrar el Fondo de Seguro de Cesación del Personal Civil del Ejército y el Fondo de Prestamos al Personal, 
            asegurando el pago de los beneficios que otorga de acuerdo a la normatividad vigente</p>
        </div>
        <div className='organigrama'>
          <h1>Organizacion</h1>

          <div className='single-grid'>
            <section>
              <p>Consejo Directivo</p>
            </section>
          </div>

          <div className='third-grid'>
            <section><p>Seccion Fondo de Seguro</p></section>
            <section><p>Seccion Apoyo Economico</p></section>
            <section><p>Seccion Tesoreria</p></section>
          </div>
        </div>
    </div>
  );
};

export default Institucional;