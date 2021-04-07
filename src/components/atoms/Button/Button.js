import React from "react";
import PropTypes from "prop-types";
import "./button.css";

function Button(props) {
  const { type, size, bgcolor } = props;
  console.log(props);
  return (
    <div>
      <button type={type} className={`btn ${bgcolor}`}>
        Sign IN{" "}
      </button>
    </div>
  );
}

Button.defaultProps = {
  bgColor: "primary",
};

export default Button;
