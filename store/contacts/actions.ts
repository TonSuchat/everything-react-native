import {
  GETCONTACTSFETCHING,
  GETCONTACTSUCCESS,
  ADDCONTACTFETCHING,
  Contact,
  ADDCONTACTSUCCESS,
} from "./types";
import { getContactsApi, addContactApi } from "../../apis/contactApi";

export const getContacts = (): ((d: any) => void) => {
  return async (dispatch) => {
    dispatch({ type: GETCONTACTSFETCHING });
    const data = await getContactsApi();
    dispatch({ type: GETCONTACTSUCCESS, contacts: data });
  };
};

export const addContact = (newContact: Contact): ((d: any) => void) => {
  return async (dispatch) => {
    dispatch({ type: ADDCONTACTFETCHING });
    const result = await addContactApi(newContact);
    if (result) {
      dispatch({ type: ADDCONTACTSUCCESS, newContact });
    }
  };
};
