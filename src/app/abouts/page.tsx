"use client";
import { Button } from "@/component/button/Button";
import { Typography } from "@mui/material";
import React, { useState } from "react";

function page() {
  const [button, setbutton] = useState(true);
  const ShowButton = () => {
    if (window.innerWidth <= 960) {
      setbutton(false);
    } else {
      setbutton(true);
    }
  };
  window.addEventListener("RESIZE", ShowButton);
  return (
    <div
      
        
      
    >
      <div>
        <video src="/videos.mp4"  autoPlay loop muted style={{
          objectFit: "cover",
          width: "100%",
          height: "100%",
          position: "fixed",
          zIndex: -1,
        }}/>
        <Typography>About page</Typography>
        <section>
          <div
            style={{
              textAlign: "center",
            }}
          >
            {button && <Button buttonstyle="btn--outline">Sign In</Button>},
            {button && <Button buttonstyle="btn--primary">login</Button>}
            {(
              <Button buttonstyle="btn--primary" buttonsize="btn--large">
                login
              </Button>
            )} 
            <Typography
              style={{
                textWrap: "wrap",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Repudiandae eaque illo harum nesciunt ex, quam error consectetur
              tempora corporis amet, mollitia excepturi vel numquam hic
              necessitatibus quisquam quaerat expedita ipsum quasi fugit eius
              est. Magnam voluptas numquam quam id delectus, quidem vel
              distinctio incidunt laboriosam voluptatibus sit voluptatum
              asperiores obcaecati alias qui a doloremque temporibus, dicta
              veniam velit veritatis? Quam cupiditate debitis repellendus
              voluptas optio. Eos asperiores, facilis laboriosam ducimus
              repudiandae iusto corrupti modi, dolore eveniet nulla neque nemo
              ratione consectetur. Optio fuga eaque nostrum temporibus nemo at,
              nihil magnam blanditiis aliquid fugit architecto, ad ex doloremque
              quo! Enim blanditiis soluta sequi rerum tempore explicabo fugiat
              vitae omnis repellat eius explicabo eaque at facilis, ea optio
              similique sequi modi beatae aut
              em dolorem minus sed. Hic vel, odit
              
            </Typography>
          </div>
          <div
            style={{
              textAlign: "center",
            }}
          >
            <Typography>fhcjerdvdheioyudefedd</Typography>
          </div>
        </section>
      </div>
      <div style={{ background: "red",
        opacity: 5
      }}>
        <Typography>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus assumenda cumque necessitatibus ut magnam temporibus quae libero explicabo dolore nostrum suscipit, quis tenetur voluptate, molestiae laboriosam dolor veritatis ullam nesciunt quo! Dolores ducimus voluptatibus quis illum, harum tempore blanditiis modi cum voluptatem et amet minus, possimus explicabo! Animi, laudantium in!</Typography>
      </div>
    </div>
  );
}

export default page;
