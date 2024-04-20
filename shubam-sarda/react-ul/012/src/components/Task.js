import React from "react";

export const Task = (props) => {
  let { id, name, completed } = props.task;
  // console.log(id, name, completed);
  return (
    <>
      <li className={completed ? "completed" : "incomplete"}>
        <span>
          {id} - {name}
        </span>
        <button onClick={() => props.handleDelete(id)} className="delete">
          Delete
        </button>
      </li>
    </>
  );
};
