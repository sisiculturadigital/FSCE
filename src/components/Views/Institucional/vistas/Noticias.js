import React, {useState, useEffect} from 'react'
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

    element.classList.contains('show')?
    document.querySelector(`.read-more-${index}`).textContent = 'Mostrar menos':
    document.querySelector(`.read-more-${index}`).textContent = 'Mostrar más'
  }


  const meses = ['', 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre' ]



  function fechaFullName(date) {
    let array = date.split('-') 
    let newDateConcat =  `${array[2]} ${meses[parseInt(array[1])]} ${array[0]}`

    return newDateConcat
  
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

                  <p style={{textAlign:'left'}}> 

                    {      
                      fechaFullName(el.fechPubl.slice(0,10))
                    }

                  </p>

                  <div className='parrafos-container' id={`parrafo-container-${index}`}>
                    {el.parrafo1 && <p>{el.parrafo1}</p>} 
                    {el.parrafo2 && <p>{el.parrafo2}</p>} 
                    {el.parrafo3 && <p>{el.parrafo3}</p>} 
                    {el.parrafo4 && <p>{el.parrafo4}</p>} 
                    {el.parrafo5 && <p>{el.parrafo5}</p>} 
                    {el.parrafo6 && <p>{el.parrafo6}</p>} 
                  </div>

                  <div className={`read-more`}>
                    <p onClick={()=>ShowContent(index)} className={`read-more-${index}`}> 
                      Mostrar más
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