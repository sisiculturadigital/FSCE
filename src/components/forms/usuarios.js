import React from 'react';

const Usuarios = () => {
  return (
    <div className='usuarios-wrapper'>
        <div className='form-usuario-container'>
            <h1>Ingresa</h1>
            <form className='form-grid'>
                <label>Usuario</label>
                <input type='text' id='usuario' name='usuario' />
                <label>Contraseña</label>
                <input type='text' id='contraseña' name='contraseña' />
            </form>
            <button>Ingresar</button>
            <h3 className='links'>Registrate</h3>
            <h3 className='links'>Recuperar contraseña</h3>
        </div>
    </div>
  );
};

export default Usuarios;