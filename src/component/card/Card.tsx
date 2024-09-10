import React from "react";
import { Header } from "./Header";
import Footer from "./Footer";
import ImageCard from "../imageCard/ImageCard";

const Card = () => {
  return (
    <div
      style={{
        fontSize: 25,
        color: "black",
        background: "yellow",
        fontFamily: "cursive",
        fontWeight: 900,
        alignItems: "center",
      }}
    >
      <Header />
      <ol
        style={{
          textAlign: "center",
          margin: "10px",
          color: "pick",
        }}
      >
        <li>It's a popular library , i will be able to fix in the cool kid</li>
        <li>I'm more likely to get job as a developer if i konw React</li>
      </ol>
      <div style={{
        alignItems: "center",
        textAlign: "center"
      }}>
        <ImageCard />
      </div>
      

      <Footer />
    </div>
  );
};

export default Card;
