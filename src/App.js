import routeArray from "./Components/Data";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./Components/Navbar";


import { Typography } from "@material-ui/core";

function App() {
  return (
    <div>
      <Navbar />
     
      <Router>
        <div style={{ display: "flex" }}>
          <div
            style={{
              width: "auto",
              marginTop: "50px",
              backgroundColor: "#9ae2f0",
              padding: "3% 4% 100% 4%",
            marginRight:"5%"
            }} >
            {routeArray.map((route, i) => (
              <Typography variant="h5" key={i}>
                <Link style={{ textDecoration: "none",color:"#293fba" }}
                  key={i} to={route.path} >
           <div style={{display:"flex" }}>
             <div style={{marginTop:"4px"}}> {route.icon} </div> &nbsp;
             <div>  {route.Title}</div>
           </div>
                </Link>
              </Typography>
            ))}
          </div>
        
          {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
          <div
            style={{
              marginTop: "5%",
              
            }}
          >
            <Routes>
              {routeArray.map((route, i) => (
                <Route key={i}  path={route.path}   element={route.component} />
              ))}
            </Routes>
          </div>
        </div>
      </Router>

     <center>
  
     </center>
    </div>

    
  );
}

export default App;
