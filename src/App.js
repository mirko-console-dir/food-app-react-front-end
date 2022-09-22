import { React, useState, useEffect } from "react";
/* connect to connect a component to the file store */
/* import { connect } from "react-redux"; */

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/homepage/HomeLandingPage";
import About from "./components/about/About";
import "./App.css";
/* to display api */
import { ToastContainer, toast } from "react-toastify";
import { useGetPurchasesQuery } from "./service/purchaseRTKservice";
function App() {
  /* useEffect(() => {
    return () => {};
  }, []); */
  /* react hook (sconveniente in app grandi usare una store globale )*/
  const { data: purchases = [], error, isLoading } = useGetPurchasesQuery();

  return (
    <>
      <div className="App">
        {/*  {todos.map((todo) => (
          <li key={todo.name}>{todo.name}</li>
        ))} */}
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About purchases={purchases} />
            </Route>
            <ToastContainer
              position="bottom-right"
              autoClose={4000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
          </Switch>
        </Router>
      </div>
    </>
  );
}
/* connect(state ,action/payload/message to store) */
/* now the App have access to the store's dispatch(send message to the store) e subscribe method  */
export default /* connect() */ App;
