import { useEffect, useState } from "react";
import "./App.css";
import { TaskCreator } from "./components/TaskCreator";
import { TaskTable } from "./components/TaskTable";
import { VisibilityControl } from "./components/VisibilityControl";
import {Container} from './components/Container'

function App() {
  const [tasksItems, setTasksItems] = useState([]);

  const [showCompleted, setShowCompleted] = useState(false);

  {
    /*ACTUALIZAMOS EL ESTADO (...MANTENIENDO LO QUE CONTIENE) Y AGREGAMOS NUEVAS TAREAS*/
  }
  {
    /*VALIDACIÓN: SI HAY TAREAS REPETIDAS, NO LA ESCRIBAS*/
  }
  function createNewTask(taskName) {
    if (!tasksItems.find((task) => task.name === taskName)) {
      setTasksItems([...tasksItems, { name: taskName, done: false }]);
    }
  }

  {
    /*FUNCIÓN toggleTask PARA MARCAR Y DESMARCAR LAS TAREAS*/
  }
  {
    /*En la variable que contiene todas las tareas (setTasksItems) aplicamos la función*/
  }
  {
    /*Recorremos las tareas (tasksItems) con .map*/
  }
  {
    /*Parametro: (t). Definimos la variable t (como tarea)*/
  }
  {
    /*si el nombre de la tarea (t.name) == al nombre de la tarea (task.name)*/
  }
  {
    /*Devolvemos (?): El arreglo de tareas(...t) y que cambie a un done distinto al que tiene por defecto que es false (cambiaría a true), o sino solo devuelve la tarea como estaba.*/
  }
  const toggleTask = (task) => {
    setTasksItems(
      tasksItems.map((t) =>
        t.name === task.name ? { ...t, done: !t.done } : t
      )
    );
  };

  {
    /*-Obtenemos la data (tareas que guardamos aca abajo) de localStorage,
     -la guardamos en una variable,
     -si hay data lo convertimos en su version JS y que se muestre
     -setTasksItems: Variable que contiene todas las tareas.*/
  }
  useEffect(() => {
    let data = localStorage.getItem("tasks");
    if (data) {
      setTasksItems(JSON.parse(data));
    }
  }, []);

  {
    /*Guardamos tasksItems(tareas) en LocalStorage en su version de JS*/
  }
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasksItems));
  }, [tasksItems]);

  {
    /*tasksItems.filter(task=>!task.done): 
   -Recorremos y filtramos en la variable que contiene las tareas (tasksItems)
   -por cada tarea (task), vamos a buscar las que su propiedad done es true o distinto de true (false)
   -ENTONCES: Retornamos las tareas que no esten hechas (task=>!task.done) 
  -FINALMENTE: Lo establecemos dentro del estado, setTasksItems*/
  }
  const cleanTasks = () => {
    setTasksItems(tasksItems.filter((task) => !task.done));
    setShowCompleted(false);
  };

  {/*
vh-100: ocupa todo el largo de la pontalla
<div className="container col-md-4 offset-md-4": Lo centra basicamente
p-4: padding 4. Nos quita el problema de un borde blanco arriba de todo*/}
  return (
    <main className="bg-dark vh-100 text-white">
      
      <Container>
        <h4 className="h4-t1 text-sm text-center text-dark  rounded-3 p-1 m-1 border-none">Registro Completo</h4>
        <TaskCreator createNewTask={createNewTask}></TaskCreator>
        {/*MUESTRA LAS TAREAS QUE NO ESTÁN MARCADAS*/}
        <TaskTable tasks={tasksItems} toggleTask={toggleTask}></TaskTable>
        {/*Visibility Control*/}
        {/*Creamos una propiedad, dentro una función que tendra como parametro checked, luego la propiedad y como parametro checked*/}
        {/*De esta forma sigue funcionando en checked que muestra las tareas hechas*/}
        {/*isChecked={showCompleted}: Propiedad que va a reflejar el paso de true a false del componente setShowCompleted(el componente que muestra las tareas ya hechas)*/}
        <VisibilityControl
          setShowCompleted={(checked) => setShowCompleted(checked)}
          cleanTasks={cleanTasks}
          isChecked={showCompleted}
        ></VisibilityControl>
        <hr />
        {/*MUESTRA LAS TAREAS QUE ESTÁN MARCADAS*/}
        {showCompleted === true && (
          <TaskTable
            tasks={tasksItems}
            toggleTask={toggleTask}
            showCompleted={showCompleted}
          ></TaskTable>
        )}
      </Container>
      
    </main>
  );
}

export default App;
