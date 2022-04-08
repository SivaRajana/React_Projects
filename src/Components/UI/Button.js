import React from "react";
import buttonStyle from "./Button.module.css";

const Button = (props) => {
    return (
        <button className={buttonStyle.button}>{props.buttonTitle}</button>
    )
}

export default Button;