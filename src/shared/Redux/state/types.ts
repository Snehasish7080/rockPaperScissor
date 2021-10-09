import BaseActionTypes from "../BaseActionType";

export enum SelectedOptionActionTypes {
  SET_USER_SELECTED_OPTION = "@@SET_USER_SELECTED_OPTION@@",
  SET_USER_SCORE = "@@SET_USER_SCORE@@",
}

export interface SetSelectedOptionI
  extends BaseActionTypes<SelectedOptionActionTypes.SET_USER_SELECTED_OPTION> {
  payload: string;
}

export interface SetUserScoreOptionI
  extends BaseActionTypes<SelectedOptionActionTypes.SET_USER_SCORE> {
  payload: number;
}

export type SelectedOptionDispatchTypes =
  | SetSelectedOptionI
  | SetUserScoreOptionI;
