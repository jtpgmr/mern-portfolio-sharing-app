import { AUTH } from "../constants/actionTypes";
import * as api from "../api/index.js";

export const signIn = (formData, location) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);

    dispatch({ type: AUTH, payload: data });

    location.push("/");
  } catch (error) {
    console.log(error);
  }
};

export const signUp = (formData, location) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);

    dispatch({ type: AUTH, payload: data });

    location.push("/");
  } catch (error) {
    console.log(error);
  }
};
