import Tarea from "./tarea.jsx";

const Tareas = (props) => {
  return (
    <div className="tasksBox">
      {props.tasks.map((e) => (
        <Tarea
          onDeleteTask={props.onDeleteTask}
          onChecked={props.onChecked}
          tarea={e}
          key={e.id}
        />
      ))}
    </div>
  );
};

export default Tareas;
