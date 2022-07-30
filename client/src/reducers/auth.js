import { AUTH, LOGOUT } from "../constants/actionTypes";

const authReducer = (state = { authData: null }, action) => {
  switch (action.type) {
    case AUTH:
      localStorage.setItem("profile", JSON.stringify({ ...action?.payload }));
      return {
        ...state,
        authData: action?.payload,
        loading: false,
        errors: false,
      };

    case LOGOUT:
      localStorage.clear();
      return { ...state, authData: null, loading: false, errors: false };

    default:
      return state;
  }
};

export default authReducer;
