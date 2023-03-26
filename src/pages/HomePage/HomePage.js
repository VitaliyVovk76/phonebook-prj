import { Link } from "react-router-dom";
import Title from "../../components/Text";
import s from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={s.wrapper}>
      <Title text="Phonebook" id="large" />
      <p>
        Simple study web app to store contacts in a cloud.{" "}
        <Link to="/register">Register</Link> your account or{" "}
        <Link to="/login">log in</Link> by using email and password, and you’ll
        get personal contacts notebook. Phone book can be accessed from desctop
        device and any browsers.
      </p>
      <p>
        Registration format: <br /> - name must be unique <br /> - e-mail as
        *****@*****.*** <br /> - password must be at least 8 characters long
      </p>
      <p>
        Registration data example: <br /> - name: svinka3 <br /> - e-mail:
        svinka3@gmail.com <br /> - password: svinka3svinka3
      </p>
      <p>In this application I had used following framework and libraries:</p>
      <ul>
        <li>React</li>
        <li>Redux, redux-toolkit</li>
        <li>React-router-dom</li>
        <li>React-persist</li>
        <li>Axios</li>
        <li>Custom components</li>
      </ul>
    </div>
  );
};

export default HomePage;
