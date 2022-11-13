import React, { useState, useEffect } from 'react';

const UseFetchValidacion = (email, pwd) => {

    const [error, setError] = useState(null)
    const [data, setData] = useState(null)
    const [isEncontrado, setisEncontrado] = useState(false)


useEffect(()=>{

    const gaa = fetch('https://backend-app-v1.herokuapp.com/publico/u/authenticate', {
        method: 'POST',
        body: JSON.stringify({
            email : email,
            pwd : pwd
        }),
        headers: {
            "Content-type": "application/json",
            "Access-Control-Allow-Origin": "*"
        }
    })
    .then(res => res.json())
    .then(datos => {
        if ( Object.keys(datos).length === 2) {
            setError(datos)
            setisEncontrado(false)
        } 
        if ( Object.keys(datos).length === 1) {
            setData(datos)
            setisEncontrado(true)
        }
        
    })

},[email, pwd])


const resultado = () =>{
    console.log(data||error)

}

return { error, isEncontrado, data, resultado }

}

export default UseFetchValidacion