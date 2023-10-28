import axios from "axios";

const url = "";
export const signupuser = async (data) => {
  try {
    const response = await axios.post(`${url}signup/createuser`, data);
    return response;
  } catch (error) {
    console.log("error", error);
    return error;
  }
};

export const loginuser = async (data) => {
  try {
    const response = await axios.post(`${url}auth/login`, data);
    return response;
  } catch (error) {
    console.log("error", error);
    return error;
  }
};
