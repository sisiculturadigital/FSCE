import React from 'react'
import oneImagen from '../../../../imgs/View/Institucional/Noticias/1.png'
import twoImagen from '../../../../imgs/View/Institucional/Noticias/2.png'
import threeImagen from '../../../../imgs/View/Institucional/Noticias/3.png'

const noticias = () => {
  return (
    <div>
      <div className='noticias'>
        {/* <center>
          <h2>
            Noticias
          </h2>
        </center> */}

        <center>
          <div className='noticias__flex'>
            <div>
              <div>
                <img src={oneImagen} alt="" />
              </div>
              <div className='noticias-info'>
                <h3>FONDO DE SEGURO</h3>
                <p>
                "Lrem ipsum dolor sit amet, consectetur adipiscing...
                </p>
                <div className='read-more'>
                  <p>
                    LEER MÁS...
                  </p>
                </div>
              </div>
            </div>
            <div>
              <img src={twoImagen} alt="" />
              <div className='noticias-info'>
                <h3>FONDO DE SEGURO</h3>
                <p>
                "Lrem ipsum dolor sit amet, consectetur adipiscing...
                </p>
                <div className='read-more'>
                  <p>
                    LEER MÁS...
                  </p>
                </div>
              </div>
            </div>
            <div>
              <img src={threeImagen} alt="" />
              <div className='noticias-info'>
                <h3>FONDO DE SEGURO</h3>
                <p>
                "Lrem ipsum dolor sit amet, consectetur adipiscing...
                </p>
                <div className='read-more'>
                  <p>
                    LEER MÁS...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </center>
      </div>
    </div>
  )
}

export default noticias