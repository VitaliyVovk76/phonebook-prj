import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import userOperations from "../../redux/user/user-operations";
import Button from "../../components/Button";
import s from "./RegisterPage.module.css";

const RegisterPage = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "name":
        return setName(value);
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
    if (email.trim() === "" || password.trim() === "" || name.trim() === "") {
      toast(`Enter the form`);
      return;
    }
    dispatch(userOperations.register({ name, email, password }));
    reset();
  };

  const reset = () => {
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <form className={s.form} onSubmit={handleSubmit} autoComplete="off">
      <input
        className={s.input}
        type="text"
        name="name"
        value={name}
        placeholder="Name"
        onChange={handleChange}
      />

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

      <Button type="submit" text="Registration" id="create" />
    </form>
  );
};

export default RegisterPage;
