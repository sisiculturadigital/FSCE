import React from 'react'
import OneImagen from '../../../../imgs/View/Institucional/Organizacion/1.png'
import TwoImagen from '../../../../imgs/View/Institucional/Organizacion/2.png'
import ThreeImagen from '../../../../imgs/View/Institucional/Organizacion/3.png'


const organizacion = () => {
  return (
    <div className='organizacion-imagenes'>
        <div></div>
        <div className='flex'>
            <div className='flex-column'>
                <div className='OneImg'><img src={OneImagen} alt="" /></div>
                <div className='ThreeImg'><img src={ThreeImagen} alt="" /></div>
            </div>
            <div className='flex-only'>
                <div className='TwoImg'><img src={TwoImagen} alt="" /></div>
            </div>
        </div>
    </div>
  )
}

export default organizacion