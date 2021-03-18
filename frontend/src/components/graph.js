import React, { useState, useEffect } from "react";

function Rectangle({ key, callBack, rectDimension, separator, column, row, colorToggle }) {
  
  const trigger =() => {
    console.log("This is the trigger function")
    callBack([row, column]);
  }

  if(!colorToggle){
    console.log(`[${row}, ${column}] is false`)
  }

  return (
    <rect
      onClick={trigger}
      fill={colorToggle ? "black" : "white"}
      x={(rectDimension + separator) * column}
      y={(rectDimension + separator) * row}
      height={rectDimension}
      width={rectDimension}
    />
  );
}

function genData(c, r) {
    const returnArray = [];

    for (let i = 0; i < r; i++) {
      const rowArray = [];
      for (let j = 0; j < c; j++) {
        rowArray.push(true);
      }
      returnArray.push(rowArray);
    }

    return returnArray;
  }

export default function Graph() {

  const columns = 32;
  const rows = 16;

  const [data, setData] = useState(genData(columns, rows))

  const width = 80;
  const height = 100;

  const rectDimension = 1;
  const separator = rectDimension / 10;


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