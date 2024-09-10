"use client";
import { Button, Typography } from "@mui/material";
import React, { useState } from "react";
import inform from "../formation/Formation";
import State from "@/component/state/State";

const Form = () => {
  const [isimage, setimage] = useState({
    toptext: "",
    bottomtext: ""
  });

  const getimageHandler = () => {
    const getimg = inform.data.meme;
    const randomdata = Math.floor(Math.random() * getimg.length);

    setimage(getimg[randomdata].url);
  };
  // function addimage(){
  //   setimage(per)

  // }
  function handlechange(event){
    event.preventDefault()
    const {name, value} = event.target
    console.log(isimage)

  }

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          alignItems: "center",
          margin: 50,

          border: "5px solid red",
          padding: "15px  45px",
          gap: 30,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: 40,
          }}
        >
          <input
            type="text"
            name="toptext"
            placeholder="shut up"
            value={isimage.toptext}
            onChange={handlechange}
            style={{
              borderRadius: 20,
              background: "white",
              border: "5px solid red",
              padding: "15px  45px",
            }}
          />
          <input
            type="text"
            name="bottomtext"
            placeholder="take my money"
            value={isimage.bottomtext}
            onChange={handlechange}
            style={{
              padding: "15px  45px",
              borderRadius: 20,
              background: "white",
              border: "5px solid red",
            }}
          />
        </div>
        <button
          style={{
            background: "red",
            display: "block",
            padding: "15px 45px ",
            border: "5px solid red",
            borderRadius: "30px",
          }}
          onClick={getimageHandler}
        >
          Get a new memeimage
        </button>
        <div>
          <State/>
        </div>

        <img src={isimage} alt="" width={400} />
      </div>
    </div>
  );
};

export default Form;
