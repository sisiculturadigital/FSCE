import React from 'react';
import pdf from "./Descargas/archivos-pdf/AUTORIZACION_DE_DESCUENTO_SUB_CAFAE_EP/AUTORIZACION_DE_DESCUENTO_SUB_CAFAE_EP.pdf"
import pdfImg from "./Descargas/archivos-pdf/AUTORIZACION_DE_DESCUENTO_SUB_CAFAE_EP/1.png"


const Descargas = () => {
    console.log('Descargas');

    return (
        <div className='container-descargas'>
            <div className='descargas-wrapper'>
                <div className='descargas-card'>
                    <img src={pdfImg} alt=""/>
                    <a download target="_blank" rel="noreferrer" href={pdf} >
                        AUTORIZACION
                    </a>
                </div>

            </div>
        </div>

    );
};

export default Descargas;