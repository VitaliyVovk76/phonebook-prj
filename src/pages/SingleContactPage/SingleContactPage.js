import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import contactsSelectonrs from "../../redux/contacts/contacts-selectors";
import contactsOperations from "../../redux/contacts/contacts-operations";
import Button from "../../components/Button";
import Modal from "../../components/Modal";
import ContactFormUpdate from "../../components/ContactFormUpdate";
import NavLinkPage from "../../components/NavLinkPage";
import Text from "../../components/Text";
import s from "./SingleContactPage.module.css";

const SingleContactPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const backLinkHref = location.state?.from ?? "/";
  const contactId = location.state.contactId;
  const contacts = useSelector(contactsSelectonrs.getAllContacts);
  const searchContact = contacts.find((contact) => contact.id === contactId);
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal((state) => !state);

  const onDeleteContact = (contactId) => {
    dispatch(contactsOperations.deleteContact(contactId));
    navigate("/contacts");
  };

  return (
    <>
      {searchContact && (
        <div className={s.card}>
          <Text
            text={`${searchContact.name} : ${searchContact.number}`}
            id="small"
          />
          <ul className={s.buttonList}>
            <li className={s.buttonItem}>
              <Button
                text="Delete"
                id="delete"
                type="button"
                onClick={() => onDeleteContact(searchContact.id)}
              />
            </li>
            <li className={s.buttonItem}>
              <Button
                text="Update"
                id="update"
                type="button"
                onClick={() => toggleModal()}
              />
            </li>
            <li className={s.buttonItem}>
              <NavLinkPage to={backLinkHref} text="Back" />
            </li>
          </ul>

          {showModal && (
            <Modal onClose={toggleModal}>
              <ContactFormUpdate
                text="Update Contact"
                onClose={toggleModal}
                id={contactId}
              />
            </Modal>
          )}
        </div>
      )}
    </>
  );
};

export default SingleContactPage;
