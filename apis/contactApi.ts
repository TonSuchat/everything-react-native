import { apiServerURL } from "../configs";
import { contentTypeJSONHeader } from "../utility";
import { Contact } from "../store/contacts/types";
import { ApiResponse } from "./types";

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

export const addContactApi = async (
  newContact: Contact
): Promise<ApiResponse> => {
  try {
    const response = await fetch(`${apiServerURL}/contacts`, {
      method: "POST",
      headers: contentTypeJSONHeader,
      body: JSON.stringify(newContact),
    });
    const json = await response.json();
    if (response.ok) {
      return { success: true };
    } else {
      return { success: false, error: json.message };
    }
  } catch (error) {
    return { success: false, error: error.message };
  }
};
