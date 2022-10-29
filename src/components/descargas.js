import React from 'react';
import { useRef, useEffect,useState } from "react";

import data from './Descargas/Json/archivos.json';
import img from '../imgs/View/descargas/Archivos_Imagen-Preview/img-preview.png';
import pdf from "./Descargas/Archivos-Downloand/AUTORIZACION_DE_DESCUENTO_SUB_CAFAE_EP.pdf"

//icons extension files
import iconPDF from '../imgs/View/descargas/icon-archivos-extension/pdf.png';





const Descargas = () => {
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
                <div className='descargas-card'>
                    <img src={data[0].ImagenPreview}alt=""  className="preview-img-pdf"/>
                        <div className='title-preview'>
                            {
                                data.map((doc) =>
                                    <div>
                                        <img src={doc.Extension} alt="icon PDF" className='icon-extension' ref={count} data-extension={doc.Extension}/>
                                        <a download target="_blank" rel="noreferrer" href={doc.urlArchivo}>
                                            {doc.NombreArchivo}.{doc.Extension}
                                        </a>
                                    </div>
                                ) 
                            }
                        </div>

                    {/* <img src={pdfImg} alt=""  className="preview-img-pdf"/>
                    <a download target="_blank" rel="noreferrer" href={pdf}>
                        AUTORIZACION
                    </a> */}
                </div>
            </div>
        </div>

    );
};

export default Descargas;