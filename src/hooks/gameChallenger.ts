import { useDispatch } from "react-redux";
import { gameButtonCategory } from "../enums/gameEnum";
import { gameResult } from "../enums/gameResultEnum";
import { setUserScore } from "../shared/Redux/state/actions";

export const useGameChallenger = () => {
  const dispatch = useDispatch();

  const SetScore = (result: gameResult) => {
    switch (result) {
      case gameResult.DRAW:
        dispatch(setUserScore(0));
        return;
      case gameResult.WIN:
        dispatch(setUserScore(1));
        return;
      case gameResult.LOSE:
        dispatch(setUserScore(-1));
        return;
      default:
        return;
    }
  };

  const systemSelectedResult = (selectedType: gameButtonCategory) => {
    const values = Object.keys(gameButtonCategory);
    const systemSelected = values[
      Math.floor(Math.random() * values.length)
    ] as gameButtonCategory;

    let result;

    if (systemSelected === selectedType) {
      result = gameResult.DRAW;
      // SetScore(result);
    } else {
      if (systemSelected === gameButtonCategory.ROCK) {
        if (selectedType === gameButtonCategory.PAPER) {
          result = gameResult.WIN;
          // SetScore(result);
        } else {
          result = gameResult.LOSE;
          // SetScore(result);
        }
      }

      if (systemSelected === gameButtonCategory.PAPER) {
        if (selectedType === gameButtonCategory.SCISSOR) {
          result = gameResult.WIN;
          // SetScore(result);
        } else {
          result = gameResult.LOSE;
          // SetScore(result);
        }
      }

      if (systemSelected === gameButtonCategory.SCISSOR) {
        if (selectedType === gameButtonCategory.ROCK) {
          result = gameResult.WIN;
          // SetScore(result);
        } else {
          result = gameResult.LOSE;
          // SetScore(result);
        }
      }
    }

    return { systemSelected, result };
  };

  return {
    systemSelectedResult,
  };
};
