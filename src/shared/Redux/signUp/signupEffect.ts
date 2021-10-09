import axios from "axios";
import { useMutation } from "react-query";
import { useHistory } from "react-router-dom";
import { signUp } from "../../../api/SignUp";
import { UserI } from "../../../interface/User";
import { setUserScore } from "../state/actions";
import { setUser, setError } from "./actions";

export const createNewUser =
  (payload: string, history: any) => (dispatch: any) => {
    signUp({
      userName: payload,
    })
      .then((response: any) => {
        if (response.data.success) {
          dispatch(setUser(response.data.data));
          dispatch(setUserScore(response.data.data.score));
          history.push("/home");
        } else {
          dispatch(setError(response.data.message));
        }
      })
      .catch((error: any) => {
        console.log("signup", error.response.data.message);
        dispatch(setError(error));
      });
  };
