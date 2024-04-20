import { useState, useRef } from "react";
import "./AddTask.css";

export const AddTask = ({ tasks, setTasks }) => {
  // const [taskValue, setTaskValue] = useState("");
  const [progress, setProgress] = useState(false);

  const taskRef = useRef("");

  const handleReset = () => {
    // setTaskValue("");
    taskRef.current.value = "";
    setProgress(false);
  };

  // const handleChange = () => {
  //   console.log(taskRef.current.value);
  // };
  const handleSubmit = (event) => {
    event.preventDefault();
    const task = {
      id: Math.floor(Math.random() * 10000),
      name: taskRef.current.value,
      completed: Boolean(progress),
    };
    setTasks([...tasks, task]);
    // console.log(tasks);
  };

  return (
    <section className="addtask">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          id="task"
          placeholder="Task Name"
          autoComplete="off"
          // value={taskValue}
          ref={taskRef}
        />
        <select
          onChange={(event) => {
            setProgress(event.target.value);
          }}
          value={progress}
        >
          <option value="false">Pending</option>
          <option value="true">Completed</option>
        </select>
        <button type="submit">Add Task</button>
        <span className="reset" onClick={handleReset}>
          Reset
        </span>
      </form>
      <p></p>
    </section>
  );
};
