export interface Contact {
  id: number;
  name: string;
  phone: string;
  image?: string;
}

export const GETCONTACTS_FETCHING = "GETCONTACTS_FETCHING";
export const GETCONTACT_SUCCESS = "GETCONTACT_SUCCESS";
export const GETCONTACT_ERROR = "GETCONTACT_ERROR";

export const ADDCONTACT_FETCHING = "ADDCONTACT_FETCHING";
export const ADDCONTACT_SUCCESS = "ADDCONTACT_SUCCESS";
export const ADDCONTACT_ERROR = "ADDCONTACT_ERROR";

interface GetContactsAction {
  type:
    | typeof GETCONTACTS_FETCHING
    | typeof GETCONTACT_SUCCESS
    | typeof GETCONTACT_ERROR;
  contacts: Contact[];
  error?: string;
}

interface AddContactAction {
  type:
    | typeof ADDCONTACT_FETCHING
    | typeof ADDCONTACT_SUCCESS
    | typeof ADDCONTACT_ERROR;
  newContact: Contact;
  error?: string;
}

export type ContactActionType = GetContactsAction | AddContactAction;

export interface ContactState {
  contacts: Contact[];
  fetching: boolean;
  error?: string;
  latestId: number;
}
