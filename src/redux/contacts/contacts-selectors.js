import { createSelector } from "@reduxjs/toolkit";
import selectorsFilter from "../filter/filter-selectors";

const getAllContacts = (state) => state.contacts.items;

const getStatus = (state) => state.contacts.status;

export const getVisibleContacts = createSelector(
  [getAllContacts, selectorsFilter.getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }
);

const selectors = { getAllContacts, getVisibleContacts, getStatus };

export default selectors;
