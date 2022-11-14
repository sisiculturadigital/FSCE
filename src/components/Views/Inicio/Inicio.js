import React from 'react'
import { Link } from 'react-router-dom';

import {FaUser} from 'react-icons/fa'
import {FiPaperclip} from 'react-icons/fi'
import {IoMdCheckboxOutline} from 'react-icons/io'
import {FaDollarSign} from 'react-icons/fa'

import { useUserContext } from '../../../context/UserProvider';

const Inicio = () => {

const {user, setUser, logOut} = useUserContext()

  return (
    <div className='Inicio-wrapper'>

        <div className='user'>
            <figure>
                <FaUser className='fa' />
            </figure>
            <div>
                {/* <p> { user.name ?? 'Alexandra Martinez' } </p> */}
                <p> Alexandra Martinez </p>
                <p>Teniente</p>
                {/* <p>DNI {user.dni ?? '232453445'}</p> */}
                <p>DNI 232453445</p>
            </div>
            <input type='button' onClick={logOut} value='Salir' />
        </div>

        <div className='menu-container'>
            <h2>Opciones de Menú</h2>
            <section>
                <div>
                    <center>
                    <Link to={"/saldo"}>
                            <figure> <IoMdCheckboxOutline className='fasearch'/> </figure>
                            <p>SALDO</p>
                        </Link>
                    </center>

                </div>
                <div className='gray'>
                    <Link to={"/aportes"}>
                        <figure><FiPaperclip className='fasearch'/></figure>
                        <p>APORTES</p>
                    </Link>
                </div>
                <div>
                    <Link to={"/pago"}>
                        <figure><FaDollarSign className='fasearch'/></figure>
                        <p>PAGO</p>
                    </Link>
                </div>
            </section>
        </div>

    </div>
  )
}

export default Inicio