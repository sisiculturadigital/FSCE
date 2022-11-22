import { urlFSCE } from "../..//url-API";

export const consultaPrestamosPorPersona = async (dni, token) => {
    const result =  await fetch(`${urlFSCE}/private/p/prestamo/${dni}`, {
        method: 'GET',
        headers: { 
            Authorization: `Bearer ${token}`,
        }
    })
    return result
}

export const consultaDetallePago = async (codAdm, idDetalle, token) => {

    const result = await fetch(`${urlFSCE}/private/p/detalle/${codAdm}/pago/${idDetalle}`, {
        method: 'GET',
        headers: { 
            Authorization: `Bearer ${token}`,
        }
    })

    return result
}

        