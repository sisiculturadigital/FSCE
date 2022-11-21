import { urlFSCE } from "../url-API";

export const recoverPassword = async (email) => {
    
    const response = fetch(`${urlFSCE}/publico/u/enviarcorreo/pass`, {  
        method: 'POST', 
        body: JSON.stringify(
            {
                to     :  email,
                subject: "RECUPERACION DE CONTRASEÑA",
                message: "<h1>RECUPERACIÓN DE CONTRASEÑA</h1></br><p>Link de recuperación de contraseña : http://localhost:8080/recupeacion</p>"
            }
        ), 
        headers: { 
            "Content-type": "application/json", 
            "Access-Control-Allow-Origin": "*" 
        } 
    })
    return response
}