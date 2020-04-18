import { apiServerURL } from "../configs";
import { contentTypeJSONHeader } from "../utility";
import { Contact } from "../store/contacts/types";

export const getContactsApi = async () => {
  try {
    const response = await fetch(`${apiServerURL}/contacts`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const addContactApi = async (newContact: Contact) => {
  try {
    const response = await fetch(`${apiServerURL}/contacts`, {
      method: "POST",
      headers: contentTypeJSONHeader,
      body: JSON.stringify(newContact),
    });
    if (response.ok) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
    return false;
  }
};
