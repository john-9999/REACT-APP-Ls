export const TaskRow = ({task, toggleTask}) => {
  return (
    <div>
      <tr>
        <td className="d-flex justify-content-between">{task.name}</td>
        {/*onChange: A LA FUNCIÓN, LE PASO COMO PARAMETRO LA TAREA QUE VA A CAMBIAR TOGGLETASK*/}
        <input
          type="checkbox"
          checked={task.done}
          onChange={()=> toggleTask(task)}
        />
      </tr>
    </div>
  );
};

export default TaskRow;
