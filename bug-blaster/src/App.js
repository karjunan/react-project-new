import logo from "./logo.svg";
import "./App.css";
import "./styles.css";
import TicketForm from "./components/TicketForm";
import ticketReducer from "./reducers/ticketReducer";
import { useReducer } from "react";
import TicketItem from "./components/TicketItem";
import TicketList from "./components/TicketList";

function App() {
  const initialState = { tickets: [] };

  const [state, dispatch] = useReducer(ticketReducer, initialState);

  // console.log("before Tickets iterations ");
  // console.log("test " + JSON.stringify(state.tickets));
  // state.payload.forEach((element) => {
  //   console.log(element);
  // });

  return (
    <div className="App">
      <div className="container">
        <h2>Bug Blaster</h2>
        <TicketForm dispatch={dispatch}></TicketForm>
        {state.tickets.length > 0 && (
          <TicketList tickets={state.tickets}></TicketList>
        )}
      </div>
    </div>
  );
}

export default App;
