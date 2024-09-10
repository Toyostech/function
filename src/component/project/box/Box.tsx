import React, { useState } from "react";

function Box(props) {
  const [on, setOn] = useState(props.on)
  const styles = {
    background: on ? "red" : "blue",
    height: "200px",
    width: "200px",
    border: "1px red solid",
    display: "inline-block",
    borderRadius: 20,
    gap: 10,
  };
  // function toggle(){
  //   setOn(prevOn=> !prevOn)
  // }
  return (
    // <div style={styles} onClick={toggle}></div>
    <div style={styles} onClick={props.clicktoggle}></div>
  )
};

export default Box;
