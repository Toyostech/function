"use client";
import { Typography } from "@mui/material";
import React, { useState } from "react";

const ConuntDate = () => {
  const [isCount, setisCount] = useState(0);
 
  function setCounthandler() {
    setisCount(isCount + 1);
  }

  function isCounthand() {
    setisCount(isCount - 1);
    

  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button
        style={{
          borderRadius: "100%",
          background: "black",
          padding: 45,
        }}
        onClick={isCounthand}
      >
        <Typography variant="h4">-</Typography>
      </button>
      <div
        style={{
          borderRadius: "100%",
          background: "green",
          padding: 50,
        }}
      >
        <Typography variant="h3">{isCount}</Typography>
      </div>
      <button
        style={{
          borderRadius: "100%",
          background: "black",
          padding: 45,
        }}
        onClick={setCounthandler}
      >
        <Typography variant="h4">+</Typography>
      </button>
    </div>
  );
};

export default ConuntDate;
