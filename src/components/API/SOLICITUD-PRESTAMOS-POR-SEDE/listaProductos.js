import { urlFSCE } from "../url-API";

export const listaProductos = async (codAdmin) => {

    const result =  await fetch(`${urlFSCE}/private/s/productos`, {
        method: 'GET',
        headers: { 
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        }
    })
    return result

}