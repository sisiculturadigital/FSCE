import React from 'react';
import { Link } from 'react-router-dom';

//componentes
import MainHeader from "./home-components/mainHeader";
import Mision from "./home-components/mision";

//img

const Home = (props) => {
  console.log("window.height", window.innerHeight)
  console.log("window.width", window.innerWidth)

  // console.log(props.data);


  return (
    <div className='container-home'>
      <h2>
        Departamento de Fondos de Seguro de Cesación del Ejercito
      </h2>
      <div className='mision'>
        <h2>
          Misión
        </h2>
        <p>
          Contribuir al Bienestar del Personal del Ejército, mediante el otorgamiento de los veneficios del Fondo de Seguro de Cesación, asi como la prestación de servicios financieros de calidad y en las mejores condiciones del mercado promedio.
        </p>
      </div>
      <div className='button-to-contact'>
        <Link to="/contacto" className='contact'>
          <center>Contactános</center>
        </Link>
        </div>
    </div>
  );
};

export default Home;