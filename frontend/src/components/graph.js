import React, { useState, useEffect } from "react";
import Rectangle from "./rectangle.js"
import { genData } from "../utils/gendata.js"
import { updateArray } from "../utils/updatearray.js"

export default function Graph() {

  const columns = 32;
  const rows = 16;

  const width = 80;
  const height = 100;

  const rectDimension = 1;
  const separator = rectDimension / 10;

  const [data, setData] = useState(genData(columns, rows))

  function handleClick (returnArray) {
    const tempArray = data;
    tempArray[returnArray[0]][returnArray[1]] = !(data[returnArray[0]][returnArray[1]]);
    setData([...tempArray]);
  }

  

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${width} ${height}`}>
        {data.map((row, rowIndex) => {
          return row.map((column, colIndex) => {
            return (
              <Rectangle
                key={`${row}.${column}`}
                callBack={handleClick}
                rectDimension={rectDimension}
                separator={separator}
                column={colIndex}
                row={rowIndex}
                colorToggle={column}
              />
            );
          });
        })}
    </svg>
  );
}