import React, { useState, useEffect } from "react";
import styled from '@emotion/styled'

export default function Rectangle({ callBack, rectDimension, separator, column, row, colorToggle }) {
  
    const trigger =() => {
      callBack([row, column]);
    }
  
    return (
      <rect
        onClick={trigger}
        fill={colorToggle ? "black" : "white"}
        x={(rectDimension) * column}
        y={(rectDimension) * row}
        height={rectDimension}
        width={rectDimension}
        stroke="black"
        strokeWidth={rectDimension/10}
      />
    );
  }