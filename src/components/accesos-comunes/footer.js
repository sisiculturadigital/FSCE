import React from 'react';

import { FaFacebookSquare, FaTwitterSquare, FaLinkedin } from "react-icons/fa";

import peruFlag from "../../imgs/peru.png"
 
const Footer = () => {
  return (
    <div className='footer-wrapper'>
        <img src={peruFlag} alt="peru-flag" />
        <h4>
            Departamento de Fondos de Seguro de Cesación del Ejercito
        </h4>
        <div className='icons-container'>
            <FaFacebookSquare />
            {/* <FaTwitterSquare />
            <FaLinkedin /> */}
        </div>
    </div>
  );
};

export default Footer;