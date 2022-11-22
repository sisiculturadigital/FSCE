import { urlFSCE } from "./url-API";

export const datosPersonaFx = async (email, token) => {

    const result =  await fetch(`${urlFSCE}/private/datos/${email}`, {
        method: 'GET',
        headers: { 
            Authorization: `Bearer ${token}`,
        }
    })
    return result

}