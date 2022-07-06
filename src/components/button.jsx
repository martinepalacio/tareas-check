import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'

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
    <form className="addForm" onSubmit={onSubmit}>
      <Form.Control 
        id="input"
        onChange={onChangeInput}
        name="descripcion"
        type="text"
        placeholder="Agregue una nueva tarea"
        value={texto}
        className="addInput" />
      <Button type="submit" variant="dark">Agregar</Button>{' '}
    </form>
  );
};
export default AddTask;
