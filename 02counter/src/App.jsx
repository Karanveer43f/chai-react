import { useState } from "react";
import "./App.css";

function App() {
  var [count, setCount] = useState(15);

  const addValue = () => {
    console.log("Add value function working");
    setCount(count + 1);
  };

  const decreaseValue = () => {
    setCount(count == 0 ? 0 : count - 1);
  };

  return (
    <>
      <h1>Chai or code with Karan</h1>
      <h2>Hola Amigo! Kaise ho theek ho</h2>
      <h2>Count : {count} </h2>

      <button onClick={addValue}>Increase Count</button>
      <button onClick={decreaseValue}>Decrease Count</button>
    </>
  );
}

export default App;
