import React from "react";
import "../StyleComponents/button.css";

const Button = ( props) => {
    return (
        <button
            className="button"
            onClick={props.onClick}
        >
            {props.children}
        </button>
    );
};
export default Button