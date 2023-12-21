import axios from "axios";
import { apiUrl } from "../config";

export const signupuser = async (data) => {
  try {
    const response = await axios.post(`${apiUrl}/signup/createuser`, data);
    return response;
  } catch (error) {
    console.log("error", error);
    return error;
  }
};

export const loginuser = async (data) => {
  try {
    const response = await axios.post(`${apiUrl}/auth/login`, data);
    return response;
  } catch (error) {
    console.log("error", error);
    return error;
  }
};
