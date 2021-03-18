import React from "react";
import Graph from "./components/graph.js";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


export default function App(){
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Graph />
        </Route>
      </Switch>
    </Router>
    
  )
}
