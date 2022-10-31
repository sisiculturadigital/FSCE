import { useState } from 'react'

export const useForm = (initialForm, ValidationsForm, openModal) => {

    const [form, setForm] = useState(initialForm)
    const [errors, setError] = useState({ validado: false })
    
    // ok

    const handleChange = (e) =>{ 
        const {name, value} = e.target
        setForm({
            ...form,
            [name]:value
        })
    }
    
    const handleBlur = (e) =>{ 
        handleChange(e)
        setError(ValidationsForm(form))
        // console.log(form)
    }  

    
    const  handleSubmit = async (e) =>{ 
        e.preventDefault();
        // console.log(form)
        console.log(errors)
        await setError(ValidationsForm(form))
        
        if(Object.keys(errors).length === 0 ){
            // openModal()
            setForm(initialForm)
            setError({ validado: false })
            console.log('conforme')
        }
        else{return;}
    }


    return{
        form, errors, handleSubmit, handleBlur, handleChange
    }
}
