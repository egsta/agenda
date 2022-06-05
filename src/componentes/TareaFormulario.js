import React, { useState } from "react";
import "./TareaFormulario.css";
import { v4 as uuidv4 } from "uuid";

function TareaFormulario(props) {
  const [inputTarea, setInputTarea] = useState("");
  const [inputPrioridad, setInputPrioridad] = useState("");
  const [inputFecha, setInputFecha] = useState("");
  const [inputDescripcion, setInputDescripcion] = useState("");

  const manejarCambio = (e) => {
    switch (e.target.name) {
      case "tarea":
        setInputTarea(e.target.value);
        break;
      case "prioridad":
        setInputPrioridad(e.target.value);
        break;
      case "fecha":
        setInputFecha(e.target.value);
        break;
      case "descripcion":
        setInputDescripcion(e.target.value);
        break;
      default:
    }

  };

  const manejarEnvio = (e) => {
    e.preventDefault();
    const tareaNueva = {
      id: uuidv4(),
      tarea: inputTarea,
      prioridad: inputPrioridad,
      fecha: inputFecha,
      descripcion: inputDescripcion,
      completada: false,
    };
    props.onSubmit(tareaNueva);
  };

  return (
    <>
      <form className="tarea-formulario" onSubmit={manejarEnvio}>
        <input
          className="tarea-input"
          type="text"
          placeholder="Nombre Tarea"
          name="tarea"
          id="1"
          onChange={manejarCambio}
        />
        <input
          className="tarea-input"
          type="text"
          placeholder="Prioridad"
          name="prioridad"
          id="2"
          onChange={manejarCambio}
        />
        <input
          className="tarea-input"
          type="date"
          placeholder="techa"
          name="fecha"
          id="3"
          onChange={manejarCambio}
        />
        <input
          className="tarea-input"
          type="text"
          placeholder="Descripcion"
          name="descripcion"
          id="4"
          onChange={manejarCambio}
        />
        <button className="tarea-boton" type="submit">Agregar Tarea</button>
        <button className="tarea-boton" onClick={props.onClear}>
        clear
      </button>
      </form>
     
    </>
  );
}

export default TareaFormulario;
