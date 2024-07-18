import React from "react";

export default function TicketItem({ ticket }) {
  // console.log(JSON.stringify(ticket));
  const { id, title, description, priority } = ticket;

  const priorityClass = {
    1: "priority-low",
    2: "priority-medium",
    3: "priority-high",
  };
  return (
    <div className="ticket-item">
      <h1>{title}</h1>
      <p>{description}</p>
      <div className={`priority-dot ${priorityClass[ticket.priority]}`}>
        {priority}
      </div>
    </div>
  );
}
