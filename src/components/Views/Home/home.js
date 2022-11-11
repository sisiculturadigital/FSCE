import React from 'react';
import { Link } from 'react-router-dom';

//componentes
import MainHeader from "./home-components/mainHeader";
import Mision from "./home-components/mision";

//img

const Home = (props) => {
  // console.log("window.height", window.innerHeight)
  // console.log("window.width", window.innerWidth)

  // let {isMobile, isOrientationVertical} = props.data
  // console.log(props.data);
  // window.addEventListener("orientationchange", function() {
  //   isMobile = true && window.orientation ===  0 ? isOrientationVertical = true : isOrientationVertical = false;
  //   console.log('isOrientationVertical', isOrientationVertical);
  // }, false)

  return (
    <div className='container-home'>
      <h2>
        Departamento de Fondos de Seguro de Cesación del Ejercito
      </h2>
      <div className='mision'>
        <p>
        Administrar el Fondo de Seguro de Cesación del Personal Civil del Ejército y el Fondo de Prestamos al Personal, asegurando el pago de los beneficios que otorga de acuerdo a la normatividad vigente
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