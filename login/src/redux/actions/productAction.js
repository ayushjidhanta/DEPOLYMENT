import axios from "axios";

import * as actionType from "../constants/productConstants";
const URL = "http://localhost:5000";

export const getProducts = () => async (dispatch) => {
  try {
    console.log("Running in redux");
    const { data } = await axios.get(`${URL}/products/getProducts`);
    dispatch({ type: actionType.GET_PRODUCTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: actionType.GET_PRODUCTS_SUCCESS,
      payload: error.message,
    });
  }
};
