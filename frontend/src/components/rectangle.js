import React, { useState, useEffect } from "react";

export default function Rectangle({rectDimension, separator, column, index}) {

    const [colorToggle, setToggle] = useState(true);
    const [fillColor, setFillColor] = useState("black")

    useEffect((colorToggle) => {
        if(colorToggle){
            setFillColor("black")
        }
        else{
            setFillColor("white")
        }
    })
  
    return (
        <rect
            onClick={() => setToggle(!colorToggle)}
            x={(rectDimension + separator) * column}
            y={(rectDimension + separator) * index}
            height={rectDimension}
            width={rectDimension}
            fill={fillColor}
      />
    );
  }