import "./App.css";
import { Header } from "./components/Header";
import { TaskList } from "./components/TaskList";

export function App() {
  return (
    <>
      <Header></Header>
      <TaskList title="Awesome"></TaskList>
    </>
  );
}

// function App() {
//   const [tasks, setTasks] = useState([
//     {id: 5271, name: "Record React Lectures", completed: true},
//     {id: 7825, name: "Edit React Lectures", completed: false},
//     {id: 8391, name: "Watch Lectures", completed: false}
//   ]);

//   return (
//     <div className="App">
//       <h1>Task List</h1>
//       <ul>
//         { tasks.map((task) => (
//           <li key={task.id}>
//             <span>{task.id} - {task.name}</span>
//             <button className='delete'>Delete</button>
//           </li>
//         )) }
//       </ul>
//     </div>
//   );
// }

export default App;
