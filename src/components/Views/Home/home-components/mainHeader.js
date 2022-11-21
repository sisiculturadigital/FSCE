import React from 'react';

//img
import img1 from '../../../../imgs/View/Home/Main-header/peru-header-1.jpg'
import img2 from '../../../../imgs/View/Home/Main-header/peru-header-2.jpg'
import img3 from '../../../../imgs/View/Home/Main-header/peru-header-3.jpg'

const MainHeader = () => {
  return (
    <div className='main-header'>
        <div className='main-content'>
            <h1>FSCE</h1>
            <h2>Departamento de Fondos de Seguro de Cesación del Ejercito</h2>
            <h3>Oficina de Economia del Ejército</h3>
        </div>

        <div className='main-imgs'>
            <img className='img1' src={img1} alt='header-img-1' />
            <img className='img2' src={img2} alt='header-img-2' />
            <img className='img3' src={img3} alt='header-img-3' />
        </div>
    </div>
  );
};

export default MainHeader;