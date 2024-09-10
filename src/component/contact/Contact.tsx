import React from 'react'
import CardImg from './CardImg'

const Contact = () => {
  return (
    <div style={{
        display: "flex",
        alignItems: "center",
        gap: 10,

       
        textAlign: "center"
    }}>
        <CardImg 
        imag= "./ball.jpg"
        name= "toyo"
        phone="535452"
        email= "salamitoyosi@gmail"
        
        />
        <CardImg 
        imag= "./black panda.jpg"
        name= "Toyo"
        phone= "452"
        email= "yellowsure@gmial"
        
        />
        <CardImg 
        imag= "./familly.jpg"
        name= "kayode"
        phone="32345235452"
        email= "tpyocmc@com "
        />
      
    </div>
  )
}

export default Contact
