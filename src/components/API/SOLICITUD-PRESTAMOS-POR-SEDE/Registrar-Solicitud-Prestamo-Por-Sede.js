import { urlFSCE } from "../url-API";

export const registrarSolicitudPrestamoPorSede = async (nroCuo, impSol, usuIng, liquidez, dni, ecPtmo) => {

    const result =  await fetch(`${urlFSCE}/private/s/solicitud/prestamo`, {
        method: 'POST',
        headers: { 
            Authorization: `Bearer ${localStorage.getItem('token')}`,
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