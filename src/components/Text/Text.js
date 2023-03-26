import React from "react";
import PropTypes from "prop-types";
import s from "./Text.module.css";

const Title = ({ text, id = "large" }) => {
  return <h2 className={s[id]}>{text}</h2>;
};

Title.propTypes = {
  text: PropTypes.string,
  id: PropTypes.oneOf(["large", "medium", "small"]),
};

export default Title;
