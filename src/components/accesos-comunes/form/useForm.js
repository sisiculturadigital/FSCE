import { useState } from 'react'
import {helpHttp} from './helpHttp.js'
import { useNavigate } from 'react-router-dom'
 
export const useForm = (initialForm, ValidationsForm, openModal) => {

    const navigate = useNavigate()

    const [form, setForm] = useState(initialForm)
    const [errors, setError] = useState({ validado: false })
    const [mostrar, setMostrar] = useState(false)
    const [response, setResponse] = useState(false)


    const handleChange = (e) =>{ 
        const {name, value} = e.target
        setForm({
            ...form,
            [name]:value
        })
    }
    
    const handleBlur = (e) =>{ 
        setError(ValidationsForm(form))
        // console.log(form)
    }  

    const handleClick = (e) =>{ 
        // handleChange(e)
        setError(ValidationsForm(form))
        console.log('click')
    }  

    
    const handleSubmit = (e) =>{ 
        e.preventDefault();
        setError(ValidationsForm(form))
        // console.log(errors)
        setMostrar(true)
        
        if(Object.keys(errors).length === 0 ){
            // openModal()
            setForm(initialForm)
            setError({ validado: false })
            console.log('conforme')
            navigate('/inicio')


            // helpHttp()  
            // .post("https://formsubmit.co/ajax/erick.sanchezcorrea@gmail.com",{
            //     body: form,
            //     headers: {
            //         "Content-Type":"application/json",
            //         Accept:"application/json",
            //     }
            // })
            // .then(res=>{
            //     setResponse(true)
            // })
            
       
        }
        else{return;}
    }


    return{
        form, errors, handleSubmit, handleBlur, handleChange, handleClick, mostrar
    }
}
