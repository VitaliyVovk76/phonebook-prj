import { useState } from "react";
import Title from "../../components/Text";
import Button from "../../components/Button";
import Modal from "../../components/Modal";
import ContactForm from "../../components/ContactForm";
import ContactsList from "../../components/ContactsList";
import Filter from "../../components/Filter";
import s from "./ContactsPage.module.css";

const ContactsPage = () => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal((state) => !state);

  return (
    <>
      <Title text="Phonebook" id="large" />
      <div className={s.btnWrapper}>
        <Button
          type="button"
          onClick={() => toggleModal()}
          text="Create contact"
          id="create"
        />
      </div>
      {showModal && (
        <Modal onClose={toggleModal}>
          <ContactForm text="Add Contact" onClose={toggleModal} />
        </Modal>
      )}

      <Filter />
      <ContactsList />
    </>
  );
};

export default ContactsPage;
