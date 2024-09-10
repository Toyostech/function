"use client";
import { Typography } from "@mui/material";
import React, { useState } from "react";
import boxDatas from "./boxdata/BoxData";
import Box from "./box/Box";

function Project() {


  const [squares, setSqares] = useState(boxDatas);
  console.log(boxDatas)

  const setElement = squares.map(item=>(
   <Box key={item.id} 
    on={item.on} 
    handleclick={clicktoggle} 
    />
  ))
  function clicktoggle(){
    console.log("click")
  }

  return (
    <div>
      <Typography>{setElement}fff </Typography>
    </div>
  );
};

export default Project;
