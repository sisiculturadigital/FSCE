import { urlFSCE } from "../url-API";

export const SolicitudDs = async (
    // vCodAdm,
    tipoBanco,
    nroCuenta,
    nroCii,
    nroContacto,
    correo,
    departamento,
    provincia,
    distrito,
    direccion
    ) => {

    const result =  await fetch(`${urlFSCE}/private/solicitud/ds`, {
        method: 'POST',
        headers: { 
            Authorization: `Bearer ${localStorage.getItem('token')}`,
            "Content-type": "application/json", 
            "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify(
            {
                vCodAdm : "10739070738",
                tipoBanco,
                nroCuenta,
                nroCii,
                nroContacto,
                correo,
                departamento,
                provincia,
                distrito,
                direccion
            }
        )
    })
    return result

}