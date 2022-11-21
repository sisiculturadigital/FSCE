/* eslint-disable no-throw-literal */
import { useState, useEffect } from "react";
import { urlFSCE } from "./url-API";


// let authenticate = {
//     email: "randy.vdiaz@gmail.com",
//     pwd: "randy" //se cambió porque en el JSON Postman tenía otra password
// }

export const usePostLogin = async (mail, password ) =>{
    const [data, setdata]=useState(null)
    const [isPending, setIsPending]=useState(true)
    const [error, setError]=useState(null)

    let url = `${urlFSCE}/publico/u/authenticate`

    useEffect(()=>{
        
        const getData = async ( ) =>{

            try{
                let res = await fetch( url, {  
                    method: 'POST', body: JSON.stringify(
                        {
                            email: 'randy.vdiaz@gmail.com',
                            pdw: "randy"
                        }
                    ), 
                    headers: { "Content-type": "application/json", "Access-Control-Allow-Origin": "*" } 
                    })
                if(!res.ok){
                    throw{
                        err:true, 
                        status:res.status, 
                        statusText: !res.statusText ? 'Ocurrió un error en fetch' : res.statusText
                    }
                }
                let data = await res.json()
                
                setIsPending(false)
                setdata(data)
                setError({err:false})
            }
            
            catch(err){
                setIsPending(true)
                setError(err)
            }
            
        }
        getData()
    },[url])
    return {data,isPending,error} 
}
