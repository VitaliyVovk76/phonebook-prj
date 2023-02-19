import NavLinkHeader from "../NavLinkHeader";

export const AuthNav = () => {
  return (
    <div>
      <nav>
        <NavLinkHeader to="register" text="Registration" />
        <NavLinkHeader to="login" text="Login" />
      </nav>
    </div>
  );
};

export default AuthNav;
