import { Typography } from "@mui/material";
import React from "react";

const CardImg = (props) => {
  return (
    <div>
      <div
        style={{
            
          borderRadius: 10,
          border: "red solid 5px",

          textAlign: "center",
        }}
      >
        <img
          src={props.imag}
          alt=""
          width={300}
          style={{
            borderRadius: 10,
            marginTop: 10,
          }}
        />
        <div style={{
           
            alignItems: "center",
            
        }}>
          <Typography variant="h5">
            {props.name}
          </Typography>
          
          <Typography color={"red"}>{props.phone}</Typography>
          <Typography>{props.email}</Typography>
        </div>
      </div>
    </div>
  );
};

export default CardImg;
