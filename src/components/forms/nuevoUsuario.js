import React, { useState } from 'react';
import axios from 'axios';

const NuevoUsuario = () => {

    const [dni, setDni] = useState('');
    const [cod_adm, setCod_adm] = useState('');
    const [ password, setPassword ] = useState('');
    const [ nombres, setNombres ] = useState('');
    const [ estado, setEstado ] = useState('');
    const [ apellidos, setApellidos ] = useState('');
    const [ vemail, setVemail ] = useState('');
    const [ id_tipo, setId_tipo ] = useState(2);
    const [msg, setMsg] = useState('');

  
    const handleChangeDni = (event) => {
      setDni(event.target.value);
    };
  
    const handleChangeCod = (event) => {
      setCod_adm(event.target.value);
    };
  
    const handleChangePassword = (event) => {
      setPassword(event.target.value);
    };
  
    const handleChangeNombres = (event) => {
      setNombres(event.target.value);
    };
  
    const handleChangeEstado = (event) => {
      setEstado(event.target.value);
    };
  
    const handleChangeApellidos = (event) => {
      setApellidos(event.target.value);
    };
  
    const handleChangeVemail = (event) => {
      setVemail(event.target.value);
    };
  
    const handleChange = (event) => {
      setId_tipo(event.target.value);
    };

    //consumiendo la api
    async function createUser(userData) {
        try {
            console.log(userData);

            const response = await axios ({
                method: 'POST',
                url: 'http://localhost:5000/usuario',
                data: userData
            })
            console.log(response);
            setMsg(response.data.message);
            console.log(msg);
            return response
        }
        catch (error) {
            console.log(error)
        }
    }

    const handleRegisterUser = (event) => {
        event.preventDefault();
        const userData = {
            dni: dni,
            cod_adm: cod_adm,
            password: password,
            nombres: nombres,
            estado: estado,
            apellidos: apellidos,
            vemail: vemail,
            id_tipo: id_tipo
        }

        createUser(userData);
    };

  return (
    <div>
        <div className='usuarios-wrapper'>
            <div className='form-usuario-nuevo-container'>
                <h1>Registro</h1>
                <form className='form-grid' onSubmit={handleRegisterUser}>
                <label>DNI</label>
                    <input type='text' id='DNI' placeholder='xxxxxxxx' value={dni} onChange={handleChangeDni} />
                    <label>COD_ADM</label>
                    <input type='text' id='COD_ADM' placeholder='xxxxxxxxxx' value={cod_adm} onChange={handleChangeCod} />
                    <label>Contraseña</label>
                    <input type='password' id='PASSWORD' placeholder='contraseñá' value={password} onChange={handleChangePassword} />
                    <label>Nombres</label>
                    <input type='text' id='NOMBRES' placeholder='Nombre' value={nombres} onChange={handleChangeNombres} />
                    <label>Estado</label>
                    <input type='text' id='ESTADO' placeholder='a' value={estado} onChange={handleChangeEstado} />
                    <label>Apellidos</label>
                    <input type='text' id='APELLIDOS' placeholder='Apellidos' value={apellidos} onChange={handleChangeApellidos} />
                    <label>Email</label>
                    <input type='email' id='VEMAIL' placeholder='ejemplo@fsce.com' value={vemail} onChange={handleChangeVemail} />
                    <button type='submit'>Registrar</button>
                </form>
            </div>
        </div>
    </div>
  );
};

export default NuevoUsuario;