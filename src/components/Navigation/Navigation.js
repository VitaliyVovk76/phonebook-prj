import NavLinkHeader from "../NavLinkHeader/NavLinkHeader";
import { useSelector } from "react-redux";
import userSelectors from "../../redux/user/user-selectors";

const Navigation = () => {
  const isLoggedIn = useSelector(userSelectors.getIsLoggedIn);
  return (
    <div>
      <nav>
        <NavLinkHeader to="/" text="About" />
        {isLoggedIn && <NavLinkHeader to="contacts" text="Contacts" />}
      </nav>
    </div>
  );
};

export default Navigation;
