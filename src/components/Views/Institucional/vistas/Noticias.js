import React, {useState, useEffect} from 'react'
import oneImagen from '../../../../imgs/View/Institucional/Noticias/1.png'
import twoImagen from '../../../../imgs/View/Institucional/Noticias/2.png'
import threeImagen from '../../../../imgs/View/Institucional/Noticias/3.png'
import {urlFSCE} from '../../../API/url-API'


const Noticias = (props) => {
  
  const [news, setNews] = useState(null)
  
  useEffect(()=>{
    fetch(`${urlFSCE}/publico/noticias`)
    .then(res=>res.json())
    .then(data=>setNews(data))
  },[])

  
  console.log(news)
  

  return (
    <div>
      <div className='noticias'>

        <center>
          <div className='noticias__flex'>
  

          {news && news.map((el, index) =>(      

            <div key={index}>

              <div>
                <img src={el.img} alt="imagen" />
              </div>

              <div className='noticias-info'>
                <h3>{el.titulo}</h3>
                <p>"Lrem ipsum dolor sit amet, consectetur adipiscing...</p>
                <div className='read-more'>
                  <p> LEER MÁS...</p>
     
                </div>
              </div>

            </div>

            ))}


          </div>
        </center>



      </div>
    </div>
  )
}

export default Noticias