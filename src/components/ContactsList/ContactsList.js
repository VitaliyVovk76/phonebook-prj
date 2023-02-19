import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import contactsOperations from "../../redux/contacts/contacts-operations";
import { Status } from "../../redux/contacts/contacts-slice";
import s from "./ContactsList.module.css";
import Title from "../Text";
import Loader from "../Loader";
import LoaderContainer from "../LoaderContainer/LoaderContainer";
import NavLinkPage from "../NavLinkPage";
import Text from "../Text";

import contactsSelectors from "../../redux/contacts/contacts-selectors";

const ContactList = () => {
  const contacts = useSelector(contactsSelectors.getVisibleContacts);
  const contactsStatus = useSelector(contactsSelectors.getStatus);

  const location = useLocation();

  const dispatch = useDispatch();

  useEffect(() => {
    if (contactsStatus === Status.IDLE)
      dispatch(contactsOperations.fetchAllContacts());
  }, [dispatch, contactsStatus]);

  return (
    <>
      <Title text="My contacts" id="medium" />
      <LoaderContainer>
        {contactsStatus === Status.PENDING && <Loader />}
      </LoaderContainer>

      {contacts.length === 0 && <Text text="...no contacts" id="small" />}
      <div className={s.contactsWrapper}>
        <ul className={s.contactList}>
          {contacts.map(({ id, name, number }) => (
            <li className={s.item} key={id}>
              <Text text={`${name} : ${number}`} id="small" />
              <NavLinkPage
                to={`/contacts/${id}`}
                text="View"
                state={{ from: location, contactId: id }}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ContactList;
