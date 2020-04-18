export interface Contact {
  id: number;
  name: string;
  phone: string;
  image?: string;
}

export const GETCONTACTSFETCHING = "GETCONTACTSFETCHING";
export const GETCONTACTSUCCESS = "GETCONTACTSUCCESS";

export const ADDCONTACTFETCHING = "ADDCONTACTFETCHING";
export const ADDCONTACTSUCCESS = "ADDCONTACTSUCCESS";

interface GetContactsAction {
  type: typeof GETCONTACTSFETCHING | typeof GETCONTACTSUCCESS;
  contacts: Contact[];
}

interface AddContactAction {
  type: typeof ADDCONTACTFETCHING | typeof ADDCONTACTSUCCESS;
  newContact: Contact;
}

export type ContactActionType = GetContactsAction | AddContactAction;

export interface ContactState {
  contacts: Contact[];
  fetching: boolean;
  error?: any;
  latestId: number;
}
