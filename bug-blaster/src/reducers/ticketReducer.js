export default function ticketReducer(state, action) {
  switch (action.type) {
    case "ADD_TICKET":
      return { ...state, tickets: [...state.tickets, action.payload] };
    case "DELETE_TICKET":
      return {
        ...state,
        tickets: state.tickets.filter((item) => item.id !== action.payload.id),
      };
    case "MODIFY_TICKET":
      const data = {
        ...state,
        tickets: state.tickets.map((item) => {
          if (item.id === action.payload.id) {
            console.log("item matched ===> " + item.id);
            debugger;
            return {
              id: action.payload.id,
              title: action.payload.title,
              description: action.payload.description,
              priority: action.payload.priority,
            };
          } else {
            return {
              ...item,
            };
          }
        }),
      };
      return data;
    default:
      return state;
  }
}
