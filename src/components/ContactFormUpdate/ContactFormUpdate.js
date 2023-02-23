import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import PropTypes from "prop-types";
import "react-toastify/dist/ReactToastify.css";
import contactOperations from "../../redux/contacts/contacts-operations";
import contactsSelectors from "../../redux/contacts/contacts-selectors";
import Form from "../Form/Form";

export default function ContactFormUpdate({ text, onClose, id }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const navigate = useNavigate();
  const allContacts = useSelector(contactsSelectors.getAllContacts);

  const dispatch = useDispatch();

  const onHandleChange = (event) => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      default:
        throw new Error(`Тип поля name ${name} не обрабатывается`);
    }
  };

  const onHendleSubmit = (event) => {
    event.preventDefault();
    if (checkName(name)) {
      toast(`${name} is alreadi in contacts`);
      return;
    }

    if (name.trim() === "" || number.trim() === "") {
      toast(`Enter the form`);
      return;
    }

    dispatch(contactOperations.updateContact({ name, number, id }));
    navigate("/contacts");
    reset();
    onClose();
  };

  const reset = () => {
    setName("");
    setNumber("");
  };

  const checkName = (newName) =>
    allContacts.find(({ name }) => name === newName);

  return (
    <Form
      name={name}
      number={number}
      handleChange={onHandleChange}
      hendleSubmit={onHendleSubmit}
      text={text}
    />
  );
}

ContactFormUpdate.propTypes = {
  text: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};
