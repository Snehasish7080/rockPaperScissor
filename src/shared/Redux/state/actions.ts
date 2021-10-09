import { Dispatch } from "redux";
import {
  SelectedOptionDispatchTypes,
  SelectedOptionActionTypes,
} from "./types";

export const setSelectedOption =
  (selectedOption: string) =>
  async (dispatch: Dispatch<SelectedOptionDispatchTypes>) => {
    dispatch({
      type: SelectedOptionActionTypes.SET_USER_SELECTED_OPTION,
      payload: selectedOption,
    });
  };

export const setUserScore =
  (score: number) =>
  async (dispatch: Dispatch<SelectedOptionDispatchTypes>) => {
    dispatch({
      type: SelectedOptionActionTypes.SET_USER_SCORE,
      payload: score,
    });
  };
