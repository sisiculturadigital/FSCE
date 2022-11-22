import React from 'react'
import {FaUser} from 'react-icons/fa'
import { useUserContext } from '../../context/UserProvider'
import { Link } from 'react-router-dom'
import Exit from './Vector.png'



const MenuLogin = ({ isOpen, closeModal}) => {

    const handleModalContainerClick = (e) =>  e.stopPropagation()

    const {user, setUser, logOut, isAuth, setIsAuth, datosPersona, setDatosPersona} = useUserContext()

    function CerrarSesion(){
        logOut()
        closeModal()
    } 


    return (
        <article className = {`menuLogin ${isOpen && 'is-open'}`} onClick={closeModal}>
            <div className="modal-container" onClick={handleModalContainerClick}>
                <div className='container-figure'>
                    <figure>
                        <FaUser className='fa' />
                    </figure>
                    <p>{datosPersona && datosPersona.nombreApe}</p> 
                </div>
                <p>DNI { datosPersona && datosPersona.dni}</p>
                <p  className='actualizar'>
                    <Link to='actualizar-contrasenia' onClick={closeModal}>
                    Actualizar contraseña
                    </Link>
                </p>

                <div className='img-container' onClick={CerrarSesion}>
                    <img src={Exit} alt="salir" /> 
                    <p style={{color: '#F50C10'}}>Salir</p>
                </div>
            </div>
        </article>
    )
  }
  
export default MenuLogin
