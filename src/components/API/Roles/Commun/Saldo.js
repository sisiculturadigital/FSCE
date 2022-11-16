import { urlFSCE } from "../..//url-API";

export const consultaPrestamosPorPersona = async (dni) => {
    const result =  await fetch(`${urlFSCE}/private/p/prestamo/${dni}`, {
        method: 'GET',
        headers: { 
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        }
    })
    return result
}

export const consultaDetallePago = async (codAdm, idDetalle) => {

    const result =  await fetch(`${urlFSCE}/private/p/detalle/${codAdm}/pago/${idDetalle}`, {
        method: 'GET',
        headers: { 
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        }
    })
    return result
}