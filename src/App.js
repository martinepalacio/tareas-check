import React, { useState, useEffect } from "react";
import "./styles.css";
import AddTask from "./components/button.jsx";
import Tareas from "./components/tareas.jsx";
import tareasjson from "./components/tareas.json";

export default function App() {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")));

  const onAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };
  const onDeleteTask = (taskdlt) => {
    let newArray = tasks.filter((dlt) => dlt.id !== taskdlt);
    setTasks(newArray);
  };
  const onChecked = (e) => {
    console.log(e.target.value);
    let newArray = tasks.map((tsk) => {
      if (tsk.id === e.target.value) {
        tsk.estado = !tsk.estado;
      }
      return tsk;
    });
    setTasks(newArray);
  };
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  })
  return (
    <div className="body">
      <h1>Tareas Check</h1>
        <hr />
        <div className="tareas">
          <AddTask onAddTask={onAddTask} />
          <Tareas
            tasks={tasks}
            onChecked={onChecked}
            onDeleteTask={onDeleteTask}
          />
        </div>
    </div>
  );
}
