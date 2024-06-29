import React, { useState } from 'react';

export default function ticketReducer(state, action) {
  switch (action.type) {
    case 'Add Ticket':
      return { ...state, tickets: [...state.tickets, action.payload] };
    case 'Update Ticket':
      return {
        ...state,
        tickets: state.tickets.map((ticket) =>
          ticket.id === action.payload.id ? action.payload : ticket
        ),
      };
    case 'Delete Ticket':
      return {
        ...state,
        tickets: state.ticket.filter(
          (ticket) => ticket.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
}
