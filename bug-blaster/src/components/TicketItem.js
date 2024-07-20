import React, { useState } from "react";

export default function TicketItem({ ticket, dispatch }) {
  // console.log(JSON.stringify(ticket));
  const { id, title, description, priority } = ticket;
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setId] = useState(id);
  const [editTitle, setEditTitle] = useState(title);
  const [editDescription, setDescription] = useState(description);
  const [editPriority, setPriority] = useState(priority);

  const priorityClass = {
    1: "priority-low",
    2: "priority-medium",
    3: "priority-high",
  };

  const priorityLabel = {
    1: "Low",
    2: "Medium",
    3: "Low",
  };

  const handleRemove = () => {
    console.log("Submitting data");
    dispatch({
      type: "DELETE_TICKET",
      payload: { id },
    });
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleChangeSubmit = () => {
    const val = {
      type: "MODIFY_TICKET",
      payload: {
        id,
        title: editTitle,
        description: editDescription,
        priority: editPriority,
      },
    };
    console.log("handleChangeSubmit", val);
    dispatch(val);
  };

  const handleTitle = (e) => {
    setEditTitle(e.target.value);
  };
  const handleDescription = (e) => {
    setDescription(e.target.value);
  };
  const handlePriority = (e) => {
    setPriority(e.target.value);
  };

  return (
    <div className="ticket-item">
      {isEditing ? (
        <>
          <form className="ticket-form" onSubmit={handleChangeSubmit}>
            <div>
              <label>Title</label>
              <input
                className="form-input"
                type="text"
                value={editTitle}
                onChange={handleTitle}
              />
            </div>
            <div>
              <label>Description</label>
              <textarea
                className="form-input"
                value={editDescription}
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
                    value={editPriority}
                    checked={priority === value}
                    onChange={handlePriority}
                  />
                  {label}
                </label>
              ))}
            </fieldset>
            <button type="submit" className="button">
              Save
            </button>
          </form>
        </>
      ) : (
        <>
          <h1>{title}</h1>
          <p>{description}</p>
          <div className={`priority-dot ${priorityClass[ticket.priority]}`}>
            {priority}
          </div>
          <button className="button" onClick={handleRemove}>
            Delete
          </button>
          <button className="button" onClick={handleEdit}>
            Edit
          </button>
        </>
      )}
    </div>
  );
}
