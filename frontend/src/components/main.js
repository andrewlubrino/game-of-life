import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Navigation from "./navbar.js"
import Graph from "./graph.js"

export default function Main(){
    return(
        <div>
            <Navigation />
            <Graph />
        </div>
    )
}