import React from "react";
import Main from "./components/main.js"
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
          <Main />
        </Route>
      </Switch>
    </Router>
    
  )
}
