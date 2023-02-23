import s from "./LoaderContainer.module.css";
import PropTypes from "prop-types";

const LoaderContainer = ({ children }) => {
  return <div className={s.container}>{children}</div>;
};

LoaderContainer.propTypes = {
  children: PropTypes.node,
};

export default LoaderContainer;
