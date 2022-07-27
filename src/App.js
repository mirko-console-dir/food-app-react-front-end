import { React, useState, useEffect } from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
const initTodos = [
  {
    name: "call ",
    dueDate: new Date().toLocaleDateString(),
  },
];
function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    setTodos(initTodos);
    return () => {};
  }, [todos]);
  /* react hook (sconveniente in app grandi usare una store globale )*/
  return (
    <div className="App">
      <header className="App-header">
        {todos.map((todo) => (
          <li key={todo.name}>{todo.name}</li>
        ))}
      </header>
    </div>
  );
}

export default App;
