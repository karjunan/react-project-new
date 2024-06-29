import React, { useState } from 'react';
import '../styles.css';

export default function TicketForm({ dispatch }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('1');

  const priorityLabels = {
    1: 'High',
    2: 'Medium',
    3: 'Low',
  };

  const clearForm = () => {
    setTitle('');
    setDescription('');
    setPriority('1');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const ticketData = {
      id: new Date().toISOString(),
      title,
      description,
      priority,
    };
    dispatch({
      type: 'Add Ticket',
      payload: ticketData,
    });

    clearForm();
  };

  return (
    <form onSubmit={handleSubmit} className="ticket-form">
      <div>
        <label>Title</label>
        <input
          type="text"
          className="form-input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label>Description</label>
        <textarea
          type="text"
          className="form-input"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <fieldset className="priority-fieldset">
        <legend>Priority</legend>
        {Object.entries(priorityLabels).map(([value, label]) => (
          <label key={value} className="priority-label">
            <input
              type="radio"
              value={value}
              className="priority-input"
              checked={priority === value}
              onChange={(e) => setPriority(e.target.value)}
            />
            {label}
          </label>
        ))}
      </fieldset>
      <button type="submit" className="button">
        {' '}
        Submit{' '}
      </button>
    </form>
  );
}
