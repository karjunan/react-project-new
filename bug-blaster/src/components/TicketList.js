import React from "react";
import TicketItem from "./TicketItem";

export default function TicketList({ tickets, dispatch }) {
  console.log(tickets);
  return (
    <>
      {tickets.map((ticket) => (
        <TicketItem
          key={ticket.id}
          ticket={ticket}
          dispatch={dispatch}
        ></TicketItem>
      ))}
    </>
  );
}
