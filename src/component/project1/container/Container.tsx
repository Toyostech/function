import React from "react";
import { Infor } from "../utility/datas";
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import ImageCard from "@/component/imageCard/ImageCard";

const Container = () => {
  return (
    <div
      style={{
        border: "red solid 5px",
        borderRadius: "10px",
        
      }}
    >
      <div>
        <div
          style={{
            display: "flex",
          }}
        >
          <img src="./familly.jpg" alt="" width={250} />
          <video src="./video-2.mp4" autoPlay loop muted  />
          <div>

                <Typography>location</Typography>
                <Typography>Link</Typography>
                <div>
                     <Typography>Header</Typography>
                <div>
                <Typography>start</Typography>
                <Typography>end</Typography>
                </div>
              <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
                eum quam similique repellat non quaerat impedit ullam pariatur
                exercitationem? Illo.
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
