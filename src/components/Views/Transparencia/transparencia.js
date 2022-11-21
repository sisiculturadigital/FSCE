// import pdf
import pdf from "./Archivos-Downloand/D.S.041.pdf";
import pdf1 from "./Archivos-Downloand/D.S.048.pdf";


// import images preview
import imgPreview from "../../../imgs/View/transparencia/Archivos_Imagen-Preview/D.S.041.png";
import imgPreview1 from "../../../imgs/View/transparencia/Archivos_Imagen-Preview/D.S.048.png";
import React from 'react';
import { useRef, useEffect,useState } from "react";

// import data from './Json/archivos.json';
// import archivos from './Archivos-Downloand/archivos.js';

//icons extension files
import iconPDF from '../../../imgs/View/descargas/icon-archivos-extension/pdf.png';

const Transparencia = () => {

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


    const array = [
        {
            "Position": 1,
            "NombreArchivo": "D.S.041.pdf",
            "Extension": "pdf",
            "ImagenPreview": iconPDF,
            "urlArchivo": pdf,
            "urlImgPreview": imgPreview
        },
        {
            "Position": 2,
            "NombreArchivo": "D.S.048.pdf",
            "Extension": "pdf",
            "ImagenPreview": iconPDF,
            "urlArchivo": pdf1,
            "urlImgPreview": imgPreview1
        }
    ]
    return (
        <div className='container-transparencia'>
            <div>
                <center>
                    <h1 className='title-descargas'>
                        TRANSPARENCIA
                    </h1>
                </center>
            </div>            
            <div className='descargas-wrapper'>
            {
                array.map((doc) =>
                    <div className='descargas-card' key={doc.Position}>
                        <img src={doc.urlImgPreview} alt=""  className="preview-img-pdf"/>
                        <div className='title-preview'>
                            <img src={iconPDF} alt="icon PDF" className='icon-extension' ref={count} data-extension={doc.Extension}/>
                            <a download target="_blank" rel="noreferrer" href={doc.urlArchivo}>
                                {doc.NombreArchivo}
                            </a>
                            <span className ="tooltiptext">{doc.NombreArchivo}</span>
                        </div>
                    </div>
                ) 
            }
            </div>
        </div>

    );
};

export default Transparencia;