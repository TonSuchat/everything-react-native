import {
  GETCONTACTS_FETCHING,
  GETCONTACT_SUCCESS,
  ADDCONTACT_FETCHING,
  Contact,
  ADDCONTACT_SUCCESS,
} from "./types";
import { getContactsApi, addContactApi } from "../../apis/contactApi";

export const getContacts = (): ((d: any) => void) => {
  return async (dispatch) => {
    dispatch({ type: GETCONTACTS_FETCHING });
    const data = await getContactsApi();
    dispatch({ type: GETCONTACT_SUCCESS, contacts: data });
  };
};

export const addContact = (newContact: Contact): ((d: any) => void) => {
  return async (dispatch) => {
    dispatch({ type: ADDCONTACT_FETCHING });
    const result = await addContactApi(newContact);
    if (result.success) {
      dispatch({ type: ADDCONTACT_SUCCESS, newContact });
    } else {
      dispatch({ type: ADDCONTACT_SUCCESS, newContact });
    }
  };
};
