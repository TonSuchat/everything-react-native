import {
  ContactState,
  ContactActionType,
  GETCONTACTS_FETCHING,
  GETCONTACT_SUCCESS,
  ADDCONTACT_FETCHING,
  ADDCONTACT_SUCCESS,
  GETCONTACT_ERROR,
  ADDCONTACT_ERROR,
} from "./types";

const initialState: ContactState = {
  contacts: [],
  fetching: false,
  latestId: 0,
  error: "",
};

export const contactReducer = (
  state: ContactState = initialState,
  action: ContactActionType
): ContactState => {
  switch (action.type) {
    case GETCONTACTS_FETCHING:
      return { ...state, fetching: true, error: "" };
    case GETCONTACT_SUCCESS:
      const latestId = action.contacts[action.contacts.length - 1].id;
      return {
        ...state,
        fetching: false,
        contacts: action.contacts,
        latestId,
        error: "",
      };
    case GETCONTACT_ERROR:
      return { ...state, fetching: false, error: action.error };
    case ADDCONTACT_FETCHING:
      return { ...state, fetching: true };
    case ADDCONTACT_SUCCESS:
      return {
        ...state,
        fetching: false,
        contacts: [...state.contacts, action.newContact],
      };
    case ADDCONTACT_ERROR:
      return { ...state, fetching: false, error: action.error };
    default:
      return state;
  }
};
