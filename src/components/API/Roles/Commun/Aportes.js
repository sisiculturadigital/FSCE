import { urlFSCE } from "../..//url-API";

export const aportes = async (codAdm, token) => {

    const result =  await fetch(`${urlFSCE}/private/a/aportes/${codAdm}`, {
        method: 'GET',
        headers: { 
            Authorization: `Bearer ${token}`,
        }
    })
    return result

}