
import './Button.css'
import React, { Children } from "react";

// interface buttontype{
//   children,

//   type,
//   title,
//   varient,
//   buttonstyle,
//   buttonsize,
//   onClick,

// }
const STYLE = ["btn--primary", "btn--outline"];
const SIZES = ["btn--medium", "btn--large"];

export const Button = ({
  children,
  type,
  buttonstyle,
  buttonsize,
  onClick
}) => {
  const loginstyle = STYLE.includes(buttonstyle) ? buttonstyle : STYLE[0];
  const loginSize = SIZES.includes(buttonsize) ? buttonsize : SIZES[0];

  return (
    <div>
      <button
        className={`btn ${loginstyle} ${loginSize}`}
        type={type}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
};
