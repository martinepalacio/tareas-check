import { FaTrashAlt } from "react-icons/fa";

const Tarea = (props) => {
  const tached = {
    color: props.tarea.estado ? "black" : "#333333",
    textDecoration: props.tarea.estado ? "none" : "line-through"
  };
  const icon = {
    cursor: "pointer"
  };
  const onDlt = (e) => {
    props.onDeleteTask(e.id);
  };
  const updateEstado = (e) => {
    props.onChecked(e);
  };

  return (
    <div>
      <div className="listaTareas">
        <b style={tached}>{props.tarea.descripcion}</b>
        <input type="checkbox" onChange={updateEstado} value={props.tarea.id} />
        <FaTrashAlt
          style={icon}
          onClick={() => onDlt(props.tarea)}
          className="icon"
          value={props.tarea.id}
        />
      </div>
    </div>
  );
};
export default Tarea;
