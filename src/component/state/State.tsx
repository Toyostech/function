import { Typography } from "@mui/material";
import React, { useState } from "react";

const State = () => {
    const [ischange, setischange] = useState(true)


    function changmind(){
        setischange(prevState => !prevState)


    }


  return (
    <div>
      <Typography>Do you like to go Out this Nigth</Typography>
      <div
      onClick={changmind}
        style={{
          background: "red",
        }}
      >
        <Typography variant="h3">{ischange ? "yes" : "No"}</Typography>
      </div>
    </div>
  );
};

export default State;
