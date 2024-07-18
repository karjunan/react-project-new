export default function ticketReducer(state, action) {
  switch (action.type) {
    case "ADD_TICKET":
      return { ...state, tickets: [...state.tickets, action.payload] };
    case "DELETE_TICKET":
      break;
    case "MODIFY_TICKET":
      break;
    default:
      return state;
  }
}
