import React, { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from "../types";

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: "Jill Johnson",
        email: "jill@gmail.com",
        phone: "111-111-111",
        type: "personal",
      },
      {
        id: 2,
        name: "Sara Watson",
        email: "sara@gmail.com",
        phone: "222-222-111",
        type: "professional",
      },
      {
        id: 3,
        name: "Harry Potter",
        email: "harry@gmail.com",
        phone: "987-654-321",
        type: "personal",
      },
    ],
  };
  // state allows to access anything in our state
  // dispatch allows us to dispatch objects to reducer
  const [state, dispatch] = useReducer(contactReducer, initialState);

  /* ALL OUR ACTIONS */

  // Add Contact
  const addContact = (contact) => {
    contact.id = uuidv4();
    console.log(contact.id);
    dispatch({ type: ADD_CONTACT, payload: contact });
  };
  // Delete Contact
  // Set Current Contact
  // Clear Current Contact
  // Update Contact
  // Filter Contacts
  // Clear Filter
  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        addContact,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
