"use client"
import React, { useState } from "react";

const Sign_In = () => {
    const [forminput, setforinput]= useState({
        Email: "",
        Password: "",
        Retype: "",
        isChecked: true




    })

    function All_formhandler(event){
        setforinput((prevData) =>{
            const {type , value, name, checked}= event.target
            return{
                ...prevData,
                [name]: type==="checkbox" ? checked : value

            }

        })
        

    }
    function Submithandler(event){
        event.preventDefault()
        if (forminput.Password === forminput.Retype){
            console.log("you have sign in")

        }else{
            console.log("please check you r password again")
            return
            
        }
        if (forminput.isChecked){
            console.log("yiu ")

        }

        
    }
  return (
    <div
      style={{
        border: "red 5px solid",
        borderRadius: "5px",
      }}
    >
      <div
        style={{
          justifyContent: "center",
          alignItems: "center",
          background: "#2123ed",
          padding: "5px 200px"
        }}
      >
        <div
          style={{
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 45,
            
            
            
            
          }}
        >
            <form onSubmit={Submithandler} action="" style={{
                
                background: "white",
                borderRadius: 10,
                padding: 20,
                gap: "50px",
                alignItems: "center",
                gap: 30

                

            }}>
                <input 
                type="text" 
                name="Email"  
                value={forminput.Email}
                onChange={All_formhandler}
                id="Email"
                placeholder="Enter your mail account" 
                style={{
                    padding: "20px 100px",
                    borderRadius: 60,
                    gap: "50px",
                    border: "1.5px red solid",
                }}
                />
                <label htmlFor="Email"></label>
                <br />

                <input
                 style={{
                    padding: "20px 100px",
                    borderRadius: 60,
                    
                    border: "1.5px red solid",
                }} 
                type="password" 
                name="Password"  
                value={forminput.Password}
                id="Password"
                onChange={All_formhandler}
                placeholder="Enter password" />
                <label htmlFor=""></label>
                <br />  

                <input 
                type="password" 
                name="Retype"
                value={forminput.Retype}
                id="Retype"
                
                onChange={All_formhandler}
                placeholder="Retype Password" 
                style={{
                    padding: "20px 100px",
                    borderRadius: 60,
                    
                    border: "1.5px red solid",
                }} 
                />
                <label htmlFor="Retype"></label>
                <br />

                <input 
                 style={{
                    padding: "20px 100px",
                    borderRadius: 60,
                    
                    border: "1.5px red solid",
                }}
                type="checkbox" 
                name="isChecked" 
                id="isChecked"
                checked={forminput.isChecked}
                
                onChange={All_formhandler}
                
                />
                <label htmlFor="isChecked" style={{
                    color: "black"
                }}> I want to join your NewLetter</label>
                <br />
                <button style={{
                    padding: "20px 50px",
                    borderRadius: 20
                }}>Submit</button>

            </form>

            <p>{}</p>
           
           
        </div>
      </div>
    </div>
  );
};

export default Sign_In;
