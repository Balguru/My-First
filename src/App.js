import routeArray from "./Components/Data";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import About from "./Components/About";

function App() {
  return (
    <Router>
      <div style={{backgroundColor:"orange",width:"10%",height:"100%"}}>
       
          {routeArray.map((route, i) => (
            <h2 key={i} style={{backgroundColor:"blue",textDecoration:"none"}}>
              <Link key={i} to={route.path}>
                {route.Title}
              </Link>
            </h2>
          ))}
     
        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Routes>
          {routeArray.map((route, i) => (
            <Route key={i} path={route.path} element={route.component} />
          ))}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
