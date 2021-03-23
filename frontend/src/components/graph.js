import React, { useState, useRef} from "react";
import Rectangle from "./rectangle.js";
import { genData } from "../utils/gendata.js";
import { updateArray } from "../utils/updatearray.js";

import styled from '@emotion/styled';

const SvgDiv = styled.div({
  height: "50%", 
  width: "80%"
})

const ParentDiv = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
})

const ButtonDiv = styled.div({
  width: "80%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  marginTop: "1rem"
})

const Button = styled.button({
  marginRight: "1rem",
  border: "none",
  borderRadius: "0.5rem",
  height: "2.25rem"
})

export default function Graph() {

  const columns = 100;
  const rows = 16;

  const rectDimension = 1;
  const separator = rectDimension / 10; 

  const [data, setData] = useState(genData(columns, rows));
  const interval = useRef(null);

  function handleClick (returnArray) {
    const tempArray = data;
    tempArray[returnArray[0]][returnArray[1]] = !(data[returnArray[0]][returnArray[1]]);
    setData([...tempArray]);
  }

  const toggleSimulation = () => {
    if(!interval.current){
      interval.current = setInterval(() => setData(data => updateArray(data, columns, rows)), 1000);
    }
    else{
      clearInterval(interval.current);
      interval.current = null;
    }
  }

  return (
    <ParentDiv>
      <SvgDiv>
        <svg viewBox={`0 0 ${columns*(rectDimension)} ${rows*(rectDimension)}`}>
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
      </SvgDiv>
      <ButtonDiv>
        <Button onClick={() => setData(updateArray(data, columns, rows))}>One Step</Button>
        <Button onClick={toggleSimulation}>Toggle Simulation</Button>
        <Button onClick={() => setData(genData(columns, rows))}>Reset</Button>
      </ButtonDiv>
    </ParentDiv>
  );
}