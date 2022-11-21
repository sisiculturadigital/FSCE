import { urlFSCE } from "./url-API";

export const datosPersonaFx = async (email) => {

    const result =  await fetch(`${urlFSCE}/private/datos/${email}`, {
        method: 'GET',
        headers: { 
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        }
    })
    return result

}