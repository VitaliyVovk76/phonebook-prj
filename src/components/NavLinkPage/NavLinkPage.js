import { NavLink } from "react-router-dom";
import s from "./NavLinkPage.module.css";

const NavLinkPage = ({ text, to, ...props }) => {
  return (
    <NavLink className={s.link} to={to} state={props.state}>
      {text}
    </NavLink>
  );
};

export default NavLinkPage;
