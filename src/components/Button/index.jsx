import React from "react";
import "./index.css";

const Button = (props) => {
  return <button {...props} className={"button" + props.className} />;
};

export default Button;
