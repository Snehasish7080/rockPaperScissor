import { combineReducers } from "redux";
import selectedOptionReducer from "./state/reducer";
import signUpReducer from "./signUp/reducer";

const rootReducer = combineReducers({
  selectedOption: selectedOptionReducer,
  signUp: signUpReducer,
});

export default rootReducer;

export type GameState = ReturnType<typeof rootReducer>;
