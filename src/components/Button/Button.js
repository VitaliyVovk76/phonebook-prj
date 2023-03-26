import React from "react";
import PropTypes from "prop-types";
import s from "./Button.module.css";

const Button = ({ text, onClick, id = "create", type }) => {
  return (
    <button className={s[id]} type={type} onClick={onClick}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  id: PropTypes.oneOf(["delete", "create", "update"]),
  type: PropTypes.string.isRequired,
};

export default Button;
