import { apiServerURL } from "../configs";
import { contentTypeJSONHeader } from "../utility";
import { ApiResponse } from "./types";

export const signinApi = async (
  email: string,
  password: string
): Promise<ApiResponse> => {
  try {
    const response = await fetch(`${apiServerURL}/auth/login`, {
      method: "POST",
      headers: contentTypeJSONHeader,
      body: JSON.stringify({ email, password }),
    });
    const json = await response.json();
    if (response.ok) {
      const { token } = json;
      return { success: true, data: token };
    }
    return { success: false, error: json.message };
  } catch (error) {
    console.log(error);
    return { success: false, error: error.message };
  }
};
