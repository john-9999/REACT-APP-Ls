export const VisibilityControl = ({setShowCompleted,cleanTasks, isChecked}) => {

   const handleDelete = ()=>{
    if(confirm("¿Estás seguro que quieres eliminar las comidas ya realizadas en tu registro?")){
        cleanTasks()
    }
   }

  return (
    <div className="d-flex justify-content-between bg-secondary text-white text-center p-2 border-secondary">
      {/*CONEXIÓN CON EL COMPONENTE VisibilityControl que está en App.jsx*/}
      {/*Cuándo se de click en el boton, se mostrará lo contrario a ShowCompletes (se mostraran las tareas que no estan marcadas)*/}
      {/*onChange={(e) => setShowCompleted(e.target.checked)}: si el input está marcado es true y si NO ESTÁ MARCADO es false*/}
      {/*checked={isChecked}: Refleja el paso de true a false, una vez que se limpian las tareas hechas*/}
      {/*<div className="form-check form-switch">: BOTON CORREDIZO PARA EL INPUT*/}
      {/*<input className="form-check-input": boton corredizo*/}

      <div className="form-check form-switch">
      <input
      className="form-check-input"
        type="checkbox"
        onChange={(e) => setShowCompleted(e.target.checked)}
        checked={isChecked}
      />
      <label>Mostrar comidas realizadas</label>
      </div>

      <button onClick={handleDelete} className="btn btn-danger btn-sm border-danger rounded-1">Limpiar</button>
    </div>
  );
};
