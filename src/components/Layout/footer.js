import React from 'react';
import { FaFacebookSquare, FaInstagram, FaWhatsapp } from "react-icons/fa";

import peruFlag from "../../imgs/Layout/Footer/peru.png"
 
const Footer = () => {
  return (
    <div className='footer-wrapper'>
        <img src={peruFlag} alt="peru-flag" />
        <h4>
            Departamento de Fondos de Seguro de Cesación del Ejercito
        </h4>
        <div className='icons-container'>
            <FaFacebookSquare />
            <FaInstagram />
            <a target='_blank' href ='https://wa.me/+51987958344'>
              <FaWhatsapp className='wpp'/>
            </a> 
        </div>
    </div>
  );
};

export default Footer;