"use client";
import { Grid } from "@mui/material";
import React, { useState } from "react";

const Form = () => {
  const [formData, setformDAte] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    phoneLine: "",
    Comment: "",
    isfriendly: "true",
    employment: "",
    favrcolor: ""


  });
  function formhandler(event) {
    
    setformDAte((prevformDate) => {
        const { name, type, value, checked} = event.target
      return {
        ...prevformDate,
        //[event.target.name]: event.target.value,  another way
        [name]: type==="checkbox" ? checked : value

      };
    });

  }
  function handleSubmit(e){
    e.preventDefault()
    console.log(formData)
    // submitAllDate(formData)


  }

  return (
    <div style={{}}>
      <form onSubmit={handleSubmit} method="post">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 30,
          }}
        >
          <input
            type="text"
            name="FirstName"
            id=""
            onChange={formhandler}
            placeholder="fIRSTnAME"
            value={formData.FirstName}
            required
            style={{
              padding: "20px 40px",
              borderRadius: 20,
              border: "red 3px solid",
              background: "white",
              color: "red",
            }}
          />
          <input
            type="number"
            name="phoneLine"
            id=""
            placeholder="moble number"
            onChange={formhandler}
            value={formData.phoneLine}
            style={{
              padding: "20px 40px",
              borderRadius: 20,
              border: "red 3px solid",
              background: "white",
              color: "red",

              fontWeight: 900,
            }}
          />
          <input
            type="text"
            name="LastName"
            id=""
            placeholder="LastNaME"
            onChange={formhandler}
            value={formData.LastName}
            style={{
              padding: "20px 40px",
              borderRadius: 20,
              border: "red 3px solid",
              background: "white",
              color: "red",
            }}
          />
        </div>
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 40
        }}>
          <input
            type="email"
            name="Email"
            id=""
            placeholder="enter mail"
            onChange={formhandler}
            value={formData.Email}
            style={{
              padding: "20px 40px",
              borderRadius: 20,
              border: "red 3px solid",
              background: "white",
              color: "red",
            }}
          />
          <textarea
            name="Comment"
            id=""
            placeholder="enter your comment"
            onChange={formhandler}
            value={formData.Comment}
            rows={10}
            cols={50}
            style={{
              border: "red 2px solid",
              borderRadius: "10px",
              background: "white",
              color: "red",
            }}
          />
          <input type="checkbox"
           name="isfriendly" 
           id="isfriendly?"
           checked={formData.isfriendly}
           onChange={formhandler}
           
           />

          <label htmlFor="isfriendly?">Are you friendly</label>
          <br />

        </div>
        <div>
            <fieldset >
                <legend>currect employment Status</legend>
                <input type="radio" 
                name="employment" 
                id="umemployed" 
                value="umeployed"
                checked={formData.employment=== "umeployed"}
                onChange={formhandler}
                />
                <label htmlFor="unemployed">unemployed</label>
                <br />
 
                
                <input type="radio" 
                name="employment"
                id="part-time"
                value="part-time"
                checked={formData.employment=== "part-time"}
                onChange={formhandler}
                />
                <label htmlFor="part-time">Part-Time</label>
                <br />
                
                <input type="radio" 
                name="employment"
                value="full-time"
                id="full-time"
                checked={formData.employment=== "full-time"}
                
                onChange={formhandler}/>
                <label htmlFor="full-time">Full-Time</label>
                <br />


            </fieldset>

            <div>
              <label htmlFor="favrcolor">what is your best color</label>
              <br />
              <select id="favrcolor"
              value={formData.favrcolor}
              onChange={formhandler}
              name="favrcolor"
              required
              >
                <option value="">choon from the option</option>
                <option value="white">white</option>
                <option value="blue">blue</option>
                <option value="pick">pick</option>
                <option value="green">green</option>
                <option value="red">red</option>
              </select>
            </div>
        </div>
        <button>Submit</button>
      </form>
      {/* <button onClick={handleSubmit}>submit</button> */}
    </div>
  );
};

export default Form;
