import React, { useState } from 'react';
import { usuarioPermitidoState } from "../../redux/usuarios/verificacionUsuarioSlice";
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { permitir } from '../../redux/usuarios/verificacionUsuarioSlice';

const ModalForm = () => {
  const dispatch = useDispatch();
  const estadoUsuarioVerificado = useSelector(usuarioPermitidoState)
  

  const [mensaje, setMensaje] = useState('');
  const [nombres, setNombres] = useState('');
  const [dni, setDni] = useState('');
  const [codAdm, setCodAdm] = useState('');
  const [nacimiento, setNacimiento] = useState('1980-12-22');

  //valores de prueaba
  const usuarioPrueba = 'FERNANDO';
  const dniPrueba = 'asdf';
  const codAdmPrueba = 'saDf';
  const nacimientoPrueba = '1998-05-09';

  //handle values changers

  const handleChangeNombres = (event) => {
    setNombres(event.target.value);
  };

  const handleChangeDni = (event) => {
    setDni(event.target.value);
  };

  const handleChangeCodAdm = (event) => {
    setCodAdm(event.target.value);
  };

  const handleChangeNacimiento = (event) => {
    setNacimiento(event.target.value);
  };

  function Verificacion (event) {
    event.preventDefault();
    if (nombres === usuarioPrueba && dni === dniPrueba && codAdm === codAdmPrueba && nacimiento === nacimientoPrueba) {
      setMensaje('usuario permitido');
      dispatch(permitir());
    } else {
      setMensaje('Usuario no permitido');
    }
  };


  return (
    <div className='autenticacion-wrapper'>
        <form className='form-container' onSubmit={Verificacion}>
          <label>Nombres</label>
          <input type='text' id='nombres' name='nombres' value={nombres} onChange={handleChangeNombres} />

          <label>DNI</label>
          <input type='text' id='dni' name='dni' value={dni} onChange={handleChangeDni} />

          <label>Cod adm</label>
          <input type='text' id='cod-adm' name='cod-adm' value={codAdm} onChange={handleChangeCodAdm} />

          <label>Fecha de nacimiento</label>
          <input type='date' id='fecha-nacimiento' name='fecha-nacimiento' value={nacimiento} min='1900-01-01' onChange={handleChangeNacimiento} />

          <button type='submit'>Verificar</button>
        </form>
    	  <div>
          <h3>{mensaje}</h3>
          { estadoUsuarioVerificado === false ? null : <Link to='/registro'>Registrate</Link> }
        </div>
    </div>
  );
};

export default ModalForm;