import Image from "next/image";
import styles from "./page.module.css";
import Navigations from "@/component/Navigation/Navigations";
import Card from "@/component/card/Card";
import Footer from "@/component/card/Footer";
import Contact from "@/component/contact/Contact";
import Dcard from "@/component/dCardReandering/Dcard";
import Container from "@/component/project1/container/Container";
import Main_page from "@/component/meme-gen/main_page";
import Counter from "@/component/counter/Counter";
import Form from "@/component/form/Form";
import Sign_In from "@/component/sign_inpage/Sign_In";

import { url } from "inspector";
import Navigated from "@/component/Navigate/Navigated";

export default function Home() {
  throw new Error("Error in Home ")
  return (
    <main className={styles.main} style={{
      background: "url(ball.jpg) center center/cover no-repeat", 
      
      textAlign: "center",
      justifyContent: "center",

    }}>
      <video src="/video-2(1).mp4" autoPlay loop muted style={{
        objectFit: "cover",
        position: "fixed",
        width: "100%",
        height: "100%",
        zIndex: -1,


      }}/>
      

      <Navigations />
      
      <Main_page />
      <Form/>
      <Sign_In/>
      <Counter/>
      
      <Card />
      <Container />
      <Contact />
      <Dcard />
      <Footer />
    </main>
  );
}
