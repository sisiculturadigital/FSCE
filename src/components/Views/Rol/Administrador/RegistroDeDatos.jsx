import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SolicitudDs } from "../../../API/SOLICITUD-PRESTAMOS-POR-SEDE/SolicitudDs";
import { BiError } from "react-icons/bi";
import { BiCheckCircle } from "react-icons/bi";
import { useUserContext } from "../../../../context/UserProvider";

const InitialValue = {
  cci: "",
  departamento: "",
  direccion: "",
  distrito: "",
  email: "",
  entidad: "",
  numeroContacto: "",
  numeroCta: "",
  provincia: "",
};

const InitialValueErr = {
  cci: "",
  departamento: "",
  direccion: "",
  distrito: "",
  email: "",
  entidad: "",
  numeroContacto: "",
  numeroCta: "",
  provincia: "",
};

const RegistroDeDatos = () => {
  const [form, setForm] = useState(InitialValue);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(InitialValueErr);
  const { token } = useUserContext();

  const HandleChange = (e) => {
    e.preventDefault();
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  function validator() {
    let error = {};

    var ExpRegSoloNumeros = "^[0-9]+$";
    var ExpRegEmail =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;

    // cci
    if (form.cci === "") {
      error.cci = "** No puede estar el campo vacío";
    } else if (!form.cci.match(ExpRegSoloNumeros)) {
      console.log(form.cci.match(ExpRegSoloNumeros));
      error.cci = "** Solo se acepta números";
    }

    // numeroCta
    if (form.numeroCta === "") {
      error.numeroCta = "** No puede estar el campo vacío";
    } else if (!form.numeroCta.match(ExpRegSoloNumeros)) {
      console.log(form.numeroCta.match(ExpRegSoloNumeros));
      error.numeroCta = "** Solo se acepta números";
    }

    // numeroContacto
    if (form.numeroContacto === "") {
      error.numeroContacto = "** No puede estar el campo vacío";
    } else if (!form.numeroContacto.match(ExpRegSoloNumeros)) {
      console.log(form.numeroContacto.match(ExpRegSoloNumeros));
      error.numeroContacto = "** Solo se acepta números";
    }

    // email
    if (form.email === "") {
      error.email = "** No puede estar el campo vacío";
    } else if (!form.email.match(ExpRegEmail)) {
      console.log(form.email.match(ExpRegEmail));
      error.email = "** Formato email no válido";
    }

    // departamento
    if (form.departamento === "") {
      error.departamento = "** No puede estar el campo vacío";
    }
    // provincia
    if (form.provincia === "") {
      error.provincia = "** No puede estar el campo vacío";
    }
    // distrito
    if (form.distrito === "") {
      error.distrito = "** No puede estar el campo vacío";
    }
    // direccion
    if (form.direccion === "") {
      error.direccion = "** No puede estar el campo vacío";
    }
    // entidad
    if (form.entidad === "") {
      error.entidad = "** No puede estar el campo vacío";
    }

    setError(error);

    if (Object.keys(error).length === 0) {
      setForm(InitialValue);

      SolicitudDs(
        token,
        form.entidad,
        form.numeroCta,
        form.cci,
        form.numeroContacto,
        form.correo,
        form.departamento,
        form.provincia,
        form.distrito,
        form.direccion
        )
      .then(res => res.json())
      .then(res => {
        console.log(res)
          setResponse(res)
          if(res.code === '200') {
              setForm(InitialValue)
          }
      })
    } else {
      setResponse(null)
    }
  }

  function OnkeyUpError(element) {
    // cci
    if (form.cci !== "" && element === "cci") {
      error.cci = null;

      setError(error);
    }

    // numeroCta
    if (form.numeroCta !== "" && element === "numeroCta") {
      console.log(element);

      error.numeroCta = null;
      setError(error);
    }

    // numeroContacto
    if (form.numeroContacto !== "" && element === "numeroContacto") {
      error.numeroContacto = null;
      setError(error);
    }

    // email
    if (form.email !== "" && element === "email") {
      error.email = null;
      setError(error);
    }

    // departamento
    if (form.departamento !== "" && element === "departamento") {
      error.departamento = null;
      setError(error);
    }
    // provincia
    if (form.provincia !== "" && element === "provincia") {
      error.provincia = null;
      setError(error);
    }
    // distrito
    if (form.distrito !== "" && element === "distrito") {
      error.distrito = null;
      setError(error);
    }
    // direccion
    if (form.direccion !== "" && element === "direccion") {
      error.direccion = null;
      setError(error);
    }
    // entidad
    if (form.entidad !== "" && element === "entidad") {
      error.entidad = null;
      setError(error);
    }
  }

  const HandleSubmit = (e) => {
    e.preventDefault();
    validator();
  };

  return (
    <div className="RegistroDeDatos">
      <div className="button-back-perfil">
        <Link to={"/inicio"}>
          <p>REGRESAR</p>
        </Link>
      </div>

      <form onSubmit={HandleSubmit}>
        <h2>Registro de datos</h2>

        <div className="total-container">
          <div className="label-container">
            <label htmlFor="entidad">Entidad Bancaria</label>
            <input
              type="text"
              name="entidad"
              value={form.entidad}
              id="entidad"
              onChange={HandleChange}
              autoComplete="off"
              onKeyUp={() => OnkeyUpError("entidad")}
            />
            <p> {error && error.entidad} </p>
          </div>

          <div className="label-container">
            <label htmlFor="numeroCta">Nº Cuenta Bancaria</label>
            <input
              type="text"
              name="numeroCta"
              value={form.numeroCta}
              id="numeroCta"
              onChange={HandleChange}
              autoComplete="off"
              onKeyUp={() => OnkeyUpError("numeroCta")}
            />
            <p> {error && error.numeroCta} </p>
          </div>

          <div className="label-container">
            <label htmlFor="cci">Código Cuenta Interbancaria(CCI)</label>
            <input
              type="text"
              name="cci"
              value={form.cci}
              id="cci"
              onChange={HandleChange}
              autoComplete="off"
              onKeyUp={() => OnkeyUpError("cci")}
            />
            <p> {error && error.cci} </p>
          </div>
        </div>

        <div className="total-container">
          <div className="label-container">
            <label htmlFor="numeroContacto">Nº de Contacto</label>
            <input
              type="text"
              name="numeroContacto"
              value={form.numeroContacto}
              id="numeroContacto"
              onChange={HandleChange}
              autoComplete="off"
              onKeyUp={() => OnkeyUpError("numeroContacto")}
            />
            <p> {error && error.numeroContacto} </p>
          </div>

          <div className="label-container">
            <label htmlFor="email">Correo Electrónico</label>
            <input
              type="text"
              name="email"
              value={form.email}
              id="email"
              onChange={HandleChange}
              autoComplete="off"
              onKeyUp={() => OnkeyUpError("email")}
            />
            <p> {error && error.email} </p>
          </div>
        </div>

        <div className="total-container">
          <div className="label-container">
            <label htmlFor="departamento">Departamento</label>
            <input
              type="text"
              name="departamento"
              value={form.departamento}
              id="departamento"
              onChange={HandleChange}
              autoComplete="off"
              onKeyUp={() => OnkeyUpError("departamento")}
            />
            <p> {error && error.departamento} </p>
          </div>
          <div className="label-container">
            <label htmlFor="provincia">Provincia</label>
            <input
              type="text"
              name="provincia"
              value={form.provincia}
              id="provincia"
              onChange={HandleChange}
              autoComplete="off"
              onKeyUp={() => OnkeyUpError("provincia")}
            />
            <p> {error && error.provincia} </p>
          </div>
          <div className="label-container">
            <label htmlFor="distrito">Distrito</label>
            <input
              type="text"
              name="distrito"
              value={form.distrito}
              id="distrito"
              onChange={HandleChange}
              autoComplete="off"
              onKeyUp={() => OnkeyUpError("distrito")}
            />
            <p> {error && error.distrito} </p>
          </div>
        </div>

        <div className="total-container">
          <div className="label-container">
            <label htmlFor="direccion">Dirección</label>
            <input
              type="text"
              name="direccion"
              value={form.direccion}
              id="direccion"
              onChange={HandleChange}
              autoComplete="off"
              onKeyUp={() => OnkeyUpError("direccion")}
            />
            <p> {error && error.direccion} </p>
          </div>
        </div>

        <div className=" button-registrar-container">
          <input type="submit" value="REGISTRAR" className="button-registrar" />
        </div>
      </form>

      <center>
        <div>
          {response ? (
            response.code === "200" ? (
              <div className="success-message">
                <figure>
                  <BiCheckCircle
                    className="fasearch"
                    style={{ color: "#1BE9B8" }}
                  />
                </figure>
                <p>{response.message}</p>
              </div>
            ) : (
              <div className="error-message">
                <figure>
                  <BiError className="fasearch" style={{ color: "#CA3937" }} />
                </figure>
                <p>{response.message}</p>
              </div>
            )
          ) : (
            ""
          )}
        </div>
      </center>
    </div>
  );
};

export default RegistroDeDatos;
