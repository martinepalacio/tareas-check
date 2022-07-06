import { FaTrashAlt } from "react-icons/fa";
import Form from 'react-bootstrap/Form';

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
      <div className="Tareas">
        <b style={tached}>{props.tarea.descripcion}</b>
        <div className="icons">
          <Form.Check 
            type="checkbox"
            id="default-checkbox"
            onChange={updateEstado} 
            value={props.tarea.id}
          />
          <FaTrashAlt
            style={icon}
            onClick={() => onDlt(props.tarea)}
            className="icon"
            value={props.tarea.id} 
          />
        </div>
      </div>
    </div>
  );
};
export default Tarea;
