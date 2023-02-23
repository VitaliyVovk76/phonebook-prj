import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import userOperations from "../../redux/user/user-operations";
import Button from "../../components/Button/Button";
import s from "./LoginPage.module.css";

const LoginPage = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);
      default:
        throw new Error(`Тип поля name ${name} не обрабатывается`);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() === "" || password.trim() === "") {
      toast(`Enter the form`);
      return;
    }
    dispatch(userOperations.logIn({ email, password }));
    reset();
  };

  const reset = () => {
    setEmail("");
    setPassword("");
  };

  return (
    <form onSubmit={handleSubmit} className={s.form} autoComplete="off">
      <input
        className={s.input}
        type="email"
        name="email"
        value={email}
        placeholder="E-mail"
        onChange={handleChange}
      />

      <input
        className={s.input}
        type="password"
        name="password"
        value={password}
        placeholder="Password"
        onChange={handleChange}
      />

      <Button type="submit" text="Log in" id="create" />
    </form>
  );
};

export default LoginPage;
