import React from "react";
import PropTypes from "prop-types";
import s from "./Text.module.css";

const Title = ({ text, id }) => {
  return <h2 className={s[id]}>{text}</h2>;
};

Title.propTypes = { text: PropTypes.string, type: PropTypes.string };

export default Title;
