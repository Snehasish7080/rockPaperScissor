import {
  SelectedOptionDispatchTypes,
  SelectedOptionActionTypes,
} from "./types";

export interface SelectedStateI {
  selectedOption: string;
  score: number;
}

const initialState: SelectedStateI = {
  selectedOption: "",
  score: 0,
};

const reducer = (
  state: SelectedStateI = initialState,
  action: SelectedOptionDispatchTypes
) => {
  switch (action.type) {
    case SelectedOptionActionTypes.SET_USER_SELECTED_OPTION:
      return {
        ...state,
        selectedOption: action.payload,
      };
    case SelectedOptionActionTypes.SET_USER_SCORE:
      return {
        ...state,
        score: state.score + action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
