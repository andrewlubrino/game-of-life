import React, { useState, useEffect } from "react";

export default function Rectangle({ callBack, rectDimension, separator, column, row, colorToggle }) {
  
    const trigger =() => {
      callBack([row, column]);
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