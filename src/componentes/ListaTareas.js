import React, { useState, useEffect } from "react";
import "./ListaTareas.css";
import TareaFormulario from "./TareaFormulario";
//import Tarea from "./Tarea";

//import listaJson from "../datos/listaJson.json"; deprecated
import datosLS from "../servicios/datosControlador"
//import TablaTareas from "./TablaTareas";

import TablaTareas2 from "./TablaTareas2";





function ListaTareas() {
//  const [tareas, setTareas] = useState([]);
  const [tablaTareas, setTablaTareas] = useState([]);
  const [estadoReinicio, setestadoReinicio] = useState(false);
  //const [cargado, setCargado] = useState(false);
  
 


  useEffect(() => {
    document.title = "Hola";
   const listaJson = datosLS.obtenerDatosLS();//localStorage.getItem("Data");
  
   if (listaJson) {
      //if (!cargado) {
      //    setCargado(true);
      console.log("useEffect onLoad");
      console.log("Algo en listaJson");
      //   listaJson.map((tarea) => {
      //     let tareasActualizadas = [tarea, ...tareas];
  //    setTareas(JSON.parse(listaJson));
      setTablaTareas(JSON.parse(listaJson))
      //   });
      //}
    }
  }, []);

  const agregarTarea = (tarea) => {
    console.log("Tarea Agregada");
    console.log(tarea);

    if (tarea.tarea.trim()) {
      tarea.texto = tarea.tarea.trim();
    //  const tareasActualizadas = [tarea, ...tareas];
      const tablaTareasActualizadas = [tarea, ...tablaTareas];
      setTablaTareas(tablaTareasActualizadas);
      //setTareas(tareasActualizadas);
      datosLS.guardarDatosLS(JSON.stringify(tablaTareasActualizadas)); //localStorage.setItem("Data", JSON.stringify(tareasActualizadas));
      console.log("TablaTareas actualizada", tablaTareasActualizadas);
    }
    
  };

  const eliminarTarea = (id) => {

    const tareasActualizadas = tablaTareas.filter((tarea) => tarea.id !== id);
    //setTareas(tareasActualizadas);
    setTablaTareas(tareasActualizadas);
    datosLS.guardarDatosLS(JSON.stringify(tareasActualizadas));  //localStorage.setItem("Data", JSON.stringify(tareasActualizadas));
    console.log("Tarea Eliminada", id);
    console.log(tareasActualizadas);
  };

  // const completarTarea = (id) => {
  //   const tareasActualizadas = tareas.map((tarea) => {
  //     if (tarea.id === id) {
  //       tarea.completada = !tarea.completada;
  //     }
  //     return tarea;
  //   });
  //   setTareas(tareasActualizadas);
  // };

  function recargarForm(){
    setestadoReinicio(!estadoReinicio);
    console.log("Llego a recargaForm")
  }

  function cellUpdate(e){
    console.log("cellUpdate", e)
    const tareasActualizadas = tablaTareas.map((tarea) => {
      if (tarea.id === e.id) {
        tarea.tarea = e.tarea;
        tarea.prioridad = e.prioridad;
        tarea.fecha = e.fecha;
        tarea.descripcion = e.descripcion
      }
      return tarea;
    });
    setTablaTareas(tareasActualizadas);
  }

  return (
    <>
      <TareaFormulario onSubmit={agregarTarea} onClear={recargarForm}   key={estadoReinicio} />{" "}
      {/*  onLoad={revisarListaJson} onLoad={revisarListaJson}  */}
     
      {/* <div className="tareas-lista-contenedor">
        {tareas.map((tarea) => (
          <Tarea
            key={tarea.id}
            id={tarea.id}
            texto={tarea.texto}
            completada={tarea.completada}npm 
            eliminarTarea={eliminarTarea}
            completarTarea={completarTarea}
          />
        ))}

      </div> */}
    <TablaTareas2 rows={tablaTareas} 
              onCellChange={cellUpdate} 
              eliminarTarea={eliminarTarea}>
              </TablaTareas2>
      {/* <TablaTareas tabla={tablaTareas}></TablaTareas> */}
      
    </>
  );
}

export default ListaTareas;
