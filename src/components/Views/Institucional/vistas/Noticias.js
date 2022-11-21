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


  function ShowContent(index){
    const element = document.querySelector(`#parrafo-container-${index}`)
    element.classList.toggle('show')
    console.log(document.querySelector(`#parrafo-container-${index}`).className) 
  }
  

  return (
    <div>
      <div className='noticias'>

        <center>
          <div className='noticias__flex'>
  

          {news && news.map((el, index) =>(      

            <div key={index}>

              <div>
                <img src={el.img1} alt="imagen" />
              </div>

              <div className='noticias-info'>
                <h3>{el.titulo}</h3>

                <div className='parrafos-container' id={`parrafo-container-${index}`}>
                  <p>{el.parrafo1}</p>
                  <p>{el.parrafo2}</p>
                  <p>{el.parrafo3}</p>
                  <p>{el.parrafo4}</p>
                  <p>{el.parrafo4}</p>
                  <p>{el.parrafo5}</p>
                  <p>{el.parrafo6}</p>
                </div>

                <div className='read-more'>
                  <p onClick={()=>ShowContent(index)}> 
                    {/* { index &&
                      document.querySelector(`#parrafo-container-${index}`).classList.contains('show') ?
                      'Mostrar menos':
                      'Mostrar más'
                    } */}
                    Mostrar más..
                  </p>
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