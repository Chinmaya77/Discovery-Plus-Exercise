import React from "react";
import "./style.css";

function Input(props) {
  const { placeHolder, classType } = props;
  return (
    <div>
      <input
        maxLength="100"
        type="text"
        placeholder={placeHolder}
        className={`input input-${classType}`}
      ></input>
    </div>
  );
}

export default Input;
