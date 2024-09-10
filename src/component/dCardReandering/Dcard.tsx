import React from "react";
import { detail } from "./Data";
import { Card, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";


const Dcard = () => {
    
  return (
    <div>
        {detail.map((item)=>(
            <div>
                <img src={item.coverimg} alt="" width={100} />
                <Typography>{item.description}</Typography>
            </div>
        ))}

    </div>
  )
};

export default Dcard;
