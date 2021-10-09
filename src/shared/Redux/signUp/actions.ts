import { Dispatch } from "redux";
import { UserI } from "../../../interface/User";
import { SignUpDispatchTypes, SignUpTypes } from "./types";

export const setUser =
  (user: UserI) => async (dispatch: Dispatch<SignUpDispatchTypes>) => {
    dispatch({
      type: SignUpTypes.CREATE_NEW_USER_SUCCESS,
      payload: user,
    });
  };

export const setError =
  (signUpError: string) => async (dispatch: Dispatch<SignUpDispatchTypes>) => {
    dispatch({
      type: SignUpTypes.CREATE_NEW_USER_FAILURE,
      payload: signUpError,
    });
  };
