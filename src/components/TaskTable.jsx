import { TaskRow } from "./TaskRow";

export const TaskTable = ({ tasks, toggleTask, showCompleted = false }) => {

  const TaskTableRows = (doneValue) => {
{/*doneValue: Parametro para ver si es true o false (al marcar y desmarcar una tarea)*/}    
{/*Tareas sin realizar (false), tareas realizadas: true*/} 
{/*.filter(task=> task.done === doneValue): filtra y separa las tareas que están en true o false*/}   
{/*.map: Recorre las tareas en el componente de los checkbox de las tareas, adentro contiene sus respectivas funciones*/}
return tasks
    .filter(task=> task.done === doneValue)
    .map((task) => (
      <TaskRow task={task} key={task.name} toggleTask={toggleTask}></TaskRow>
    ));
  };

  return (
    <div>
      <table className="table table-dark table-striped table-bordered border-secondary border">
        <thead>
          <tr className="table-primary ">
            <th>Mi Registro nutricional</th>
          </tr>
        </thead>
        <tbody>
            {/*TaskTableRows(showCompleted): Componente de las tareas completadas o marcadas, showCompleted es el parametro que le pasamos para indicar si está en true o false*/}
          {
            TaskTableRows(showCompleted)
          }
        </tbody>
      </table>
    </div>
  );
};

export default TaskTable;
