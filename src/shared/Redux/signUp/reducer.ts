import { UserI } from "../../../interface/User";
import { SignUpDispatchTypes, SignUpTypes } from "./types";

export interface SignUpStateI {
  user: UserI;
  message: string;
}

const initialState: SignUpStateI = {
  user: {} as UserI,
  message: "",
};

const reducer = (
  state: SignUpStateI = initialState,
  action: SignUpDispatchTypes
) => {
  switch (action.type) {
    case SignUpTypes.CREATE_NEW_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
      };
    case SignUpTypes.CREATE_NEW_USER_FAILURE:
      return {
        ...state,
        message: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
