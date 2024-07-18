import React from "react";
import TicketItem from "./TicketItem";

export default function TicketList({ tickets }) {
  console.log(tickets);
  return (
    <>
      {tickets.map((ticket) => (
        <TicketItem key={ticket.id} ticket={ticket}></TicketItem>
      ))}
    </>
  );
}
