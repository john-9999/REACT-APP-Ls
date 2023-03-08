import { useState, useEffect } from "react";

export const TaskCreator = ({ createNewTask }) => {
  const [newTaskName, setnewTaskName] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    createNewTask(newTaskName);
    {
      /*nueva tarea*/
    }

    setnewTaskName("");
    {
      /*escribela en pantalla*/
    }
  };

  return (
    <form onSubmit={handleSubmit} className="my-2 row rounded-1">
      <center><p>Desarrollado por <a className="a-dev text-info" href="https://linktr.ee/juanperez_2">Juan Manuel Perez</a></p></center>
      <div className=" m-2">
          <b className="text-info">Ejemplo instructivo:<br></br> Día-Fecha + DESAYUNO: Tostado +
            licuado de frutas + 3 nueces
          </b>
        </div>
      <div className="col-9">
        
        <input
          className="form-control"
          type="text"
          placeholder="Escribe tu registro nutricional"
          value={newTaskName}
          onChange={(e) => {
          setnewTaskName(e.target.value);
          }}
        />

      </div>
      {/*
col-3: 3 columnas
btn-primary: color del boton
btn-sm: boton small (chiquito)
*/}
      <div className="col-3">
        <button className="btn-guardar">
          Guardar
        </button>
      </div>
    </form>
  );
};

export default TaskCreator;
