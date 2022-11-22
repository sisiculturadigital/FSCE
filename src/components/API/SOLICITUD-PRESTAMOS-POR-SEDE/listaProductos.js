import { urlFSCE } from "../url-API";

export const listaProductos = async (token) => {

    const result =  await fetch(`${urlFSCE}/private/s/productos`, {
        method: 'GET',
        headers: { 
            Authorization: `Bearer ${token}`,
        }
    })
    return result

}