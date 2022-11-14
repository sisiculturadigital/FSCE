import { urlFSCE } from "../..//url-API";

export const pago = async (codAdmin) => {

    const result =  await fetch(`${urlFSCE}/private/s/pagosrecibidos/socio/${codAdmin}`, {
        method: 'GET',
        headers: { 
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        }
    })
    return result

}