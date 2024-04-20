import { useState } from "react";
import { Task } from "./Task";
import { BoxCard } from "./BoxCard";

export const TaskList = (props) => {
  const [tasks, setTask] = useState([
    { id: 111, name: "Record 1", completed: false },
    { id: 112, name: "Record 2", completed: true },
    { id: 113, name: "Record 3", completed: false },
  ]);

  const [show, setShow] = useState(true);

  function deleteTask(id) {
    // console.log(id);
    setTask(tasks.filter((task) => task.id !== id));
  }

  function handleShow() {
    setShow(!show);
  }

  return (
    <div className="App">
      <h1> Task List {props.title}</h1>
      <ul>
        <button className="trigger" onClick={() => handleShow()}>
          button
        </button>
        {show &&
          tasks.map((task) => (
            <Task key={task.id} task={task} handleDelete={deleteTask} />
          ))}
      </ul>
      <BoxCard result="success">
        <p className="title">Lorem ipsum dolor sit amet.</p>
        <p className="description">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet,
          eligendi!
        </p>
      </BoxCard>
      <BoxCard result="warning">
        <p className="title">Lorem, ipsum.</p>
        <p className="description">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet,
          eligendi!
        </p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
      </BoxCard>
      <BoxCard result="alert">
        <p className="title">Lorem, ipsum dolor.</p>
        <p className="description">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet,
          eligendi!
        </p>
      </BoxCard>
    </div>
  );
};
