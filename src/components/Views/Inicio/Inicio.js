import React from 'react'
import {FaUser} from 'react-icons/fa'
import {FiSearch} from 'react-icons/fi'

import { useUserContext } from '../../../context/UserProvider';





const Inicio = () => {

const {user, setUser, numero} = useUserContext()

console.log(user)


  return (
    <div className='Inicio-wrapper'>

        <div className='user'>
            <figure>
                <FaUser className='fa' />
            </figure>
            <div>
                <p> { user.name || 'Alexandra Martinez' } </p>
                <p>Teniente</p>
                <p>DNI {user.dni || '232453445'}</p>
            </div>
        </div>

        <div className='menu-container'>
            <h2>Opciones de Menú</h2>
            <section>
                <div>
                    <figure> <FiSearch className='fasearch'/> </figure>
                    <p>Consulta saldo de préstamos</p>
                </div>
                <div className='green'>
                    <figure><FiSearch className='fasearch'/></figure>
                    <p>Consulta aportes al FSCPC</p>
                </div>
                <div>
                    <figure><FiSearch className='fasearch'/></figure>
                    <p>Consulta pagos realizados</p>
                </div>
            </section>
        </div>

    </div>
  )
}

export default Inicio