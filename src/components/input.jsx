import React from "react";

import "../StyleComponents/input.css";

const Input = (props) => {
    return (

            <input
                className="input"
                type="text"
                name={props.id}
                id={props.id}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}
            />

    );
};

export default Input;