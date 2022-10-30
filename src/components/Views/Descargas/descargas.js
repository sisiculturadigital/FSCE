import React from 'react';
import { useRef, useEffect,useState } from "react";

import data from './Json/archivos.json';
import archivos from './Archivos-Downloand/archivos.js';

// import img from '../imgs/View/descargas/Archivos_Imagen-Preview/img-preview.png';
// import pdf from "./Descargas/Archivos-Downloand/SOLICITUD_FSRyC_VARIOS.pdf"

//icons extension files
import iconPDF from '../../../imgs/View/descargas/icon-archivos-extension/pdf.png';
import imgPreview from '../../../imgs/View/descargas/Archivos_Imagen-Preview/img-preview.png';






const Descargas = () => {
    // console.log(pdf)
    const count = useRef();

    useEffect(() => {
        switch (count.current.dataset.extension) {
            case 'pdf':;
                count.current.src=iconPDF;
                break;
            default:
                console.log(`Sorry, we are out of ${count.current.dataset.extension}.`);
        }
    }, []);


    return (
        <div className='container-descargas'>
            <div>
                <center>
                    <h1 className='title-descargas'>
                        DESCARGAS
                    </h1>
                </center>
            </div>            
            <div className='descargas-wrapper'>
                {
                    data.map((doc) =>
                    <div className='descargas-card'>
                        <img src={imgPreview} alt=""  className="preview-img-pdf"/>
                        <div className='title-preview'>
                                <img src={iconPDF} alt="icon PDF" className='icon-extension' ref={count} data-extension={doc.Extension}/>
                                    <a download target="_blank" rel="noreferrer" href={doc.urlArchivo}>
                                        {doc.NombreArchivo}
                                    </a>
                            </div>
                        </div>

                    ) 
                }
                    {/* <img src={pdfImg} alt=""  className="preview-img-pdf"/>
                    <a download target="_blank" rel="noreferrer" href={pdf}>
                        AUTORIZACION
                    </a> */}
            </div>
        </div>

    );
};

export default Descargas;