"use client";
import { Typography } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";

// const studentData = [
//   {
//     firstName : "toyosi",
//     LastName: "salami",
//     Email: "salamitoyosi@mail.com",
//     islike: false
//   }

// ]

const ImageCard = () => {
  const [contact, setcontact] = useState({
    firstName: "toyosi",
    LastName: "salami",
    Email: "salamitoyosi@mail.com",
    islike: false,
  });

  let imgchange = contact.islike ? "pngwing.com.png" : "wing.png"
  function togglechange(){
    setcontact(pervState => ({
      ...pervState,
      islike: !pervState.islike
      
    }))
   
    
    
  }

  // function changehandle (){
  //   setcontact(prevState = prevS)
  // }

  const timedate = new Date();
  const hour = timedate.getDay();
  let TimeofDate;
  if (hour < 7) {
    TimeofDate = "goodmorning";
  } else {
    TimeofDate = "goodnight";
  }
  return (
    <div
      style={{
        textAlign: "center",

        background: "#ffd",
        border: 10,
        width: 450,
        borderRadius: 25,
      }}
    >
      <div
        style={{
          textAlign: "center",
        }}
      >
        <img
          src="/1image.jpeg"
          alt=""
          width={400}
          height={400}
          style={{
            borderRadius: 100,
          }}
        />
        <div>
          {/* <div>
          <img src="pngwing.com.png" alt=""  width={200} />
        {contact.map((item)=>(
          <div>
          <Typography variant="h4">{item.firstName}</Typography>
          <Typography variant="h5">{item.LastName}</Typography>
          <Typography variant="h4">{item.Email}</Typography>

          </div>


        ))}
        
       </div> */}
          <div>
            <img src={`${imgchange}`} alt="" width={200}  onClick={togglechange} style={{
              background: "red",
              padding: "30px",
            }}/>
            <Typography variant="h3">{contact.firstName}</Typography>
            <Typography variant="h4">{contact.LastName}</Typography>
            <Typography variant="h5">{contact.Email}</Typography>
          </div>

          <div>
            <p
              style={{
                fontSize: "2.5rem",
              }}
            >
              Toyosi Salami
            </p>
            <p>FrontEnd Developer</p>
            <p>{timedate.getHours()} Oclock</p>
            <p>{timedate.getMinutes()} Oclock</p>
            <p>{timedate.getSeconds()} Oclock</p>
            <p>{TimeofDate} Oclock</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
