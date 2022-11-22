import { urlFSCE } from "../url-API";

export const registrarSolicitudPrestamoPorSede = async (nroCuo, impSol, usuIng, liquidez, dni, ecPtmo, token) => {

    const result =  await fetch(`${urlFSCE}/private/s/solicitud/prestamo`, {
        method: 'POST',
        headers: { 
            Authorization: `Bearer ${token}`,
            "Content-type": "application/json", 
            "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify(
            {
                nroCuo, 
                impSol, 
                usuIng, 
                liquidez, 
                dni, 
                ecPtmo
            }
        )
    })
    return result

}