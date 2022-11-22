import { urlFSCE } from "../..//url-API";

export const pago = async (codAdmin, token) => {

    const result =  await fetch(`${urlFSCE}/private/s/pagosrecibidos/socio/${codAdmin}`, {
        method: 'GET',
        headers: { 
            Authorization: `Bearer ${token}`,
        }
    })
    return result

}