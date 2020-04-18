import {
  ContactState,
  ContactActionType,
  GETCONTACTSFETCHING,
  GETCONTACTSUCCESS,
  ADDCONTACTFETCHING,
  ADDCONTACTSUCCESS,
} from "./types";

const initialState: ContactState = {
  contacts: [],
  fetching: false,
  error: null,
  latestId: 0,
};

export const contactReducer = (
  state: ContactState = initialState,
  action: ContactActionType
): ContactState => {
  switch (action.type) {
    case GETCONTACTSFETCHING:
      return { ...state, fetching: true };
    case GETCONTACTSUCCESS:
      const latestId = action.contacts[action.contacts.length - 1].id;
      return { ...state, fetching: false, contacts: action.contacts, latestId };
    case ADDCONTACTFETCHING:
      return { ...state, fetching: true };
    case ADDCONTACTSUCCESS:
      return {
        ...state,
        fetching: false,
        contacts: [...state.contacts, action.newContact],
      };
    default:
      return state;
  }
};
