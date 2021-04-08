import React from "react";
import "./style.css";

function Input(props) {
  const { placeHolder, inputValue, classType } = props;
  return (
    <div>
      <input
        maxLength="100"
        type="text"
        placeholder={placeHolder}
        // value={inputValue}
        className={`input input-${classType}`}
      ></input>
    </div>
  );
}

export default Input;
