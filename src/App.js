import { React, useState, useEffect } from "react";

import { useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/homepage/Navbar";
import Home from "./components/homepage/HomeLandingPage";
import About from "./components/homepage/About";
import "./App.css";

/* const initTodos = [
  {
    name: "call ",
    dueDate: new Date().toLocaleDateString(),
  },
]; */

function App() {
  /* const [todos, setTodos] = useState([]);
  useEffect(() => {
    setTodos(initTodos);
    return () => {};
  }, [todos]); */
  /* react hook (sconveniente in app grandi usare una store globale )*/
  return (
    <>
      <div className="App">
        {/*  {todos.map((todo) => (
          <li key={todo.name}>{todo.name}</li>
        ))} */}
        <Router>
          {/*           <Navbar />
           */}{" "}
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
