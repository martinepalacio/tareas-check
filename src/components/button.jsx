import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const AddTask = ({ onAddTask }) => {
  const [texto, setText] = useState("");

  const onChangeInput = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onAddTask({
      id: uuidv4(),
      descripcion: texto,
      estado: true
    });
    setText((e.target.value = ""));
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        id="input"
        onChange={onChangeInput}
        name="descripcion"
        type="text"
        placeholder="Agregue una nueva tarea"
        value={texto}
        variant="outline-primary"
      />
      <button type="submit">Agregar</button>
    </form>
  );
};
export default AddTask;
