import axios from "axios";
import { apiUrl } from "../../config";
import * as actionType from "../constants/productConstants";


export const getProducts = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`${apiUrl}/products/getProducts`);
    dispatch({ type: actionType.GET_PRODUCTS_SUCCESS, payload: data });
  } catch (error) {
    debugger;
    dispatch({
      type: actionType.GET_PRODUCTS_SUCCESS,
      payload: error.message,
    });
  }
};
