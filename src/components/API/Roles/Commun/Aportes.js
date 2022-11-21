import { urlFSCE } from "../..//url-API";

export const aportes = async (codAdm) => {

    const result =  await fetch(`${urlFSCE}/private/a/aportes/${codAdm}`, {
        method: 'GET',
        headers: { 
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        }
    })
    return result

}