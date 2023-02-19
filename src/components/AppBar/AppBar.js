import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Container from "../Container";
import Navigation from "../Navigation";
import UserMenu from "../UserMenu";
import AuthNav from "../AuthNav";
import Loader from "../Loader/Loader";
import userSelectors from "../../redux/user/user-selectors";
import s from "./AppBar.module.css";

const AppBar = () => {
  const isLoggedIn = useSelector(userSelectors.getIsLoggedIn);
  return (
    <>
      <header className={s.header}>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </header>
      <Container>
        <Suspense
          fallback={
            <div>
              <Loader />
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};

export default AppBar;
