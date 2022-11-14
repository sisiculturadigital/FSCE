import { urlFSCE } from "../..//url-API";

export const aportes = async (dni) => {

    const result =  await fetch(`${urlFSCE}/private/p/prestamo/${dni}`, {
        method: 'GET',
        headers: { 
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        }
    })
    return result

}