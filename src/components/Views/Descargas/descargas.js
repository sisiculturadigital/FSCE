// import pdf
import pdf from "./Archivos-Downloand/AUT_DSCTO_DESCUENTO_COPERE.pdf";
import pdf1 from "./Archivos-Downloand/AUT_DSCTO_DESCUENTO_CPMP.pdf";
import pdf2 from "./Archivos-Downloand/AUTORIZACION_DE_DESCUENTO_SUB_CAFAE_EP.pdf";
import pdf3 from "./Archivos-Downloand/CARTA_DECLARATORIA_FSCEC.pdf";
import pdf4 from "./Archivos-Downloand/COMPROMISO_PAGO_OBLIGATORIO.pdf";
import pdf5 from "./Archivos-Downloand/CONTRATO_FIANZA.pdf";
import pdf6 from "./Archivos-Downloand/DOC_NO_REVOCATORIA_CPMP.pdf";
import pdf7 from "./Archivos-Downloand/FOLLETO_FSCEC.pdf";
import pdf8 from "./Archivos-Downloand/SOLICITUD_FSCEC.pdf";
import pdf9 from "./Archivos-Downloand/SOLICITUD_FSRyC_VARIOS.pdf";
import pdf10 from "./Archivos-Downloand/SOLICITUD_PRESTAMO.pdf";
import pdf11 from "./Archivos-Downloand/SOLICITUD_VARIOS.pdf";

// import images preview
import imgPreview from "../../../imgs/View/descargas/Archivos_Imagen-Preview/AUT_DSCTO_DESCUENTO_CPMP.png";
import imgPreview1 from "../../../imgs/View/descargas/Archivos_Imagen-Preview/DOC_NO_REVOCATORIA_CPMP.png";
import imgPreview2 from "../../../imgs/View/descargas/Archivos_Imagen-Preview/SOLICITUD_PRESTAMO.png";
import imgPreview3 from "../../../imgs/View/descargas/Archivos_Imagen-Preview/AUT_DSCTO_DESCUENTO_COPERE.png";
import imgPreview4 from "../../../imgs/View/descargas/Archivos_Imagen-Preview/SOLICITUD_FSCEC.png";
import imgPreview5 from "../../../imgs/View/descargas/Archivos_Imagen-Preview/AUTORIZACION_DE_DESCUENTO_SUB_CAFAE_EP.png";
import imgPreview6 from "../../../imgs/View/descargas/Archivos_Imagen-Preview/CONTRATO_FIANZA.png";
import imgPreview7 from "../../../imgs/View/descargas/Archivos_Imagen-Preview/FOLLETO_FSCEC.png";
import imgPreview8 from "../../../imgs/View/descargas/Archivos_Imagen-Preview/SOLICITUD_VARIOS.png";
import imgPreview9 from "../../../imgs/View/descargas/Archivos_Imagen-Preview/SOLICITUD_FSRyC_VARIOS.png";
import imgPreview10 from "../../../imgs/View/descargas/Archivos_Imagen-Preview/CARTA_DECLARATORIA_FSCEC.png";
import imgPreview11 from "../../../imgs/View/descargas/Archivos_Imagen-Preview/COMPROMISO_PAGO_OBLIGATORIO.png";

import React from 'react';
import { useRef, useEffect,useState } from "react";

// import data from './Json/archivos.json';
// import archivos from './Archivos-Downloand/archivos.js';

//icons extension files
import iconPDF from '../../../imgs/View/descargas/icon-archivos-extension/pdf.png';

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


    const array = [
        {
            "Position": 1,
            "NombreArchivo": "AUT_DSCTO_DESCUENTO_COPERE.pdf",
            "Extension": "pdf",
            "ImagenPreview": iconPDF,
            "urlArchivo": pdf,
            "urlImgPreview": imgPreview
        },
        {
            "Position": 2,
            "NombreArchivo": "AUT_DSCTO_DESCUENTO_CPMP.pdf",
            "Extension": "pdf",
            "ImagenPreview": iconPDF,
            "urlArchivo": pdf1,
            "urlImgPreview": imgPreview1
        },    
        {
            "Position": 3,
            "NombreArchivo": "AUTORIZACION_DE_DESCUENTO_SUB_CAFAE_EP.pdf",
            "Extension": "pdf",
            "ImagenPreview": iconPDF,
            "urlArchivo": pdf2,
            "urlImgPreview": imgPreview2
        },    
        {
            "Position": 4,
            "NombreArchivo": "CARTA_DECLARATORIA_FSCEC.pdf",
            "Extension": "pdf",
            "ImagenPreview": iconPDF,
            "urlArchivo": pdf3,
            "urlImgPreview": imgPreview3
        },    
        {
            "Position": 5,
            "NombreArchivo": "COMPROMISO_PAGO_OBLIGATORIO.pdf",
            "Extension": "pdf",
            "ImagenPreview": iconPDF,
            "urlArchivo": pdf4,
            "urlImgPreview": imgPreview4
        },    
        {
            "Position": 6,
            "NombreArchivo": "CONTRATO_FIANZA.pdf",
            "Extension": "pdf",
            "ImagenPreview": iconPDF,
            "urlArchivo": pdf5,
            "urlImgPreview": imgPreview5
        },    
        {
            "Position": 7,
            "NombreArchivo": "DOC_NO_REVOCATORIA_CPMP.pdf",
            "Extension": "pdf",
            "ImagenPreview": iconPDF,
            "urlArchivo": pdf6,
            "urlImgPreview": imgPreview6
        },    
        {
            "Position": 8,
            "NombreArchivo": "FOLLETO_FSCEC.pdf",
            "Extension": "pdf",
            "ImagenPreview": iconPDF,
            "urlArchivo": pdf7,
            "urlImgPreview": imgPreview7
        },    
        {
            "Position": 9,
            "NombreArchivo": "SOLICITUD_FSCEC.pdf",
            "Extension": "pdf",
            "ImagenPreview": iconPDF,
            "urlArchivo": pdf8,
            "urlImgPreview": imgPreview8
        },    
        {
            "Position": 10,
            "NombreArchivo": "SOLICITUD_FSRyC_VARIOS.pdf",
            "Extension": "pdf",
            "ImagenPreview": iconPDF,
            "urlArchivo": pdf9,
            "urlImgPreview": imgPreview9
        },    
        {
            "Position": 11,
            "NombreArchivo": "SOLICITUD_PRESTAMO.pdf",
            "Extension": "pdf",
            "ImagenPreview": iconPDF,
            "urlArchivo": pdf10,
            "urlImgPreview": imgPreview10
        },    
        {
            "Position": 12,
            "NombreArchivo": "SOLICITUD_VARIOS.pdf",
            "Extension": "pdf",
            "ImagenPreview": iconPDF,
            "urlArchivo": pdf11,
            "urlImgPreview": imgPreview11
        }
    ]


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
                array.map((doc) =>
                    <div className='descargas-card'>
                        <img src={doc.urlImgPreview} alt=""  className="preview-img-pdf"/>
                        <div className='title-preview'>
                            <img src={iconPDF} alt="icon PDF" className='icon-extension' ref={count} data-extension={doc.Extension}/>
                            <a download target="_blank" rel="noreferrer" href={doc.urlArchivo}>
                                {doc.NombreArchivo}
                            </a>
                            <span class="tooltiptext">{doc.NombreArchivo}</span>
                        </div>
                    </div>
                ) 
            }
            </div>
        </div>

    );
};

export default Descargas;