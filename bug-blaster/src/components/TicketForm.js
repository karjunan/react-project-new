import React, { useState } from "react";
import "../styles.css";

export default function TicketForm({ dispatch }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("1");

  const priorityLabel = {
    1: "Low",
    2: "Medium",
    3: "Low",
  };

  const clearForm = () => {
    setTitle("");
    setDescription("");
    setPriority("1");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(title + " --- " + description + " --  " + priority);

    const ticketData = {
      id: new Date().toISOString(),
      title,
      description,
      priority,
    };

    dispatch({
      type: "ADD_TICKET",
      payload: ticketData,
    });

    clearForm();
  };
  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handlePriority = (e) => {
    setPriority(e.target.value);
  };

  return (
    <form className="ticket-form" onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <input
          className="form-input"
          type="text"
          value={title}
          onChange={handleTitle}
        />
      </div>
      <div>
        <label>Description</label>
        <textarea
          className="form-input"
          value={description}
          onChange={handleDescription}
        />
      </div>

      <fieldset className="priority-fieldset">
        <legend>Priority</legend>
        {Object.entries(priorityLabel).map(([value, label]) => (
          <label className="priority-label" key={value}>
            <input
              type="radio"
              className="priority-input"
              value={value}
              checked={priority === value}
              onChange={handlePriority}
            />
            {label}
          </label>
        ))}
      </fieldset>
      <button type="submit" className="button">
        Submit
      </button>
    </form>
  );
}
