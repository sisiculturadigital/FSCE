import { urlFSCE } from "../url-API";

export const registroUsuario = async (dni,fechaNac,codAdm,email,password,nombres,apellidos,codRole) => {
    
    const response = fetch(`${urlFSCE}/publico/u/registro`, {  
        method: 'POST', 
        body: JSON.stringify(
            {
                dni,
                fechaNac,
                codAdm,
                email,
                password,
                nombres,
                apellidos,
                codRole
            }
        ), 
        headers: { 
            "Content-type": "application/json", 
            "Access-Control-Allow-Origin": "*" 
        } 
    })
    return response
}