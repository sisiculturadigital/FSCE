import { urlFSCE } from "../url-API";

export const recuperarContraseniaPost = async (dni,fechaNac,codAdm,email,password) => {
    
    const response = fetch(`${urlFSCE}/publico/u/recuperar/pass`, {  
        method: 'POST', 
        body: JSON.stringify(
            {
                dni,
                fechaNac,
                codAdm,
                email,
                password
            }
        ), 
        headers: { 
            "Content-type": "application/json", 
            "Access-Control-Allow-Origin": "*" 
        } 
    })
    return response
}