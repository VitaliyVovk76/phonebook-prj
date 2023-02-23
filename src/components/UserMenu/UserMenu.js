import { useDispatch, useSelector } from "react-redux";
import userSelectors from "../../redux/user/user-selectors";
import userOperations from "../../redux/user/user-operations";
import Button from "../Button";
import s from "./UserMenu.module.css";
const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(userSelectors.getUsername);
  return (
    <div>
      <span className={s.name}>Welcom, {name}</span>
      <Button
        type="button"
        onClick={() => dispatch(userOperations.logOut())}
        text="Log Out"
        id="delete"
      />
    </div>
  );
};

export default UserMenu;
