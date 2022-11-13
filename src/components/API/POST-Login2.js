import { urlFSCE } from "./url-API";

export const postLogin = async (email, pwd) => {
    const response = fetch(`${urlFSCE}/publico/u/authenticate`, {  
        method: 'POST', 
        body: JSON.stringify(
            {
                email,
                pwd,
            }
        ), 
        headers: { 
            "Content-type": "application/json", 
            "Access-Control-Allow-Origin": "*" 
        } 
    })
    return response
}