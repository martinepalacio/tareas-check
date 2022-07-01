import React, { useState } from "react";
import "./styles.css";
import AddTask from "./components/button.jsx";
import Tareas from "./components/tareas.jsx";
import tareasjson from "./components/tareas.json";

export default function App() {
  const [tasks, setTasks] = useState(tareasjson);

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
  const filter = (e) => {
    let newArray1 = tasks.filter((tsk) => {
      if (e.target.value === "true") {
        return !tsk.estado;
      }
      if (e.target.value === "false") {
        return tsk.estado;
      } else {
        return tsk;
      }
    });
    setTasks(newArray1);
  };
  return (
    <div className="body">
      <h1>Tareas Check</h1>
      <div>
        <hr />
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
