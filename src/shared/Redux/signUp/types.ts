import { UserI } from "../../../interface/User";
import BaseActionTypes from "../BaseActionType";

export enum SignUpTypes {
  CREATE_NEW_USER_REQUEST = "@@CREATE_NEW_USER_REQUEST@@",
  CREATE_NEW_USER_SUCCESS = "@@CREATE_NEW_USER_SUCCESS@@",
  CREATE_NEW_USER_FAILURE = "@@CREATE_NEW_USER_FAILURE@@",
}

export interface createUserI
  extends BaseActionTypes<SignUpTypes.CREATE_NEW_USER_REQUEST> {
  payload: UserI;
}
export interface createUserSuccessI
  extends BaseActionTypes<SignUpTypes.CREATE_NEW_USER_SUCCESS> {
  payload: UserI;
}
export interface createUserFailureI
  extends BaseActionTypes<SignUpTypes.CREATE_NEW_USER_FAILURE> {
  payload: string;
}

export type SignUpDispatchTypes =
  | createUserI
  | createUserSuccessI
  | createUserFailureI;
