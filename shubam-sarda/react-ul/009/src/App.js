import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function handleAdd() {
    setCount(count + 1);
    console.log(count);
  }

  function handleSub() {
    setCount(count - 1);
    console.log(count);
  }

  return (
    <div className="App">
      <div className="box">
        <p>{count}</p>
        <button onClick={handleAdd} className="add">
          ADD
        </button>
        <button onClick={handleSub} className="sub">
          SUB
        </button>
      </div>
    </div>
  );
}

export default App;

// return (
//   <div className="App">
//     <div className="box">
//       <p>{count}</p>
//       <button onClick={handleAdd} className='add'>ADD</button>
//       <button className='sub'>SUB</button>
//     </div>
//   </div>
// );
