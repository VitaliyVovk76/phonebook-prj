import { NavLink } from "react-router-dom";
import s from "./NavLinkHeader.module.css";

const NavLinkHeader = ({ text, to }) => {
  return (
    <NavLink
      className={({ isActive }) => (isActive ? s.activeLink : s.link)}
      to={to}
    >
      {text}
    </NavLink>
  );
};

export default NavLinkHeader;
