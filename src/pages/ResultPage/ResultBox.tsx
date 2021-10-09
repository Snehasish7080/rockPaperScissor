import React, { useCallback, useEffect, useMemo } from "react";
import { Typography, Button } from "@mui/material";
import { Box } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import GameButton from "../../organisms/GameButton/GameButton";
import { SelectedStateI } from "../../shared/Redux/state/reducer";
import { gameButtonCategory } from "../../enums/gameEnum";
import { gameButtonColor } from "../../enums/gameColorEnum";
import { useGameChallenger } from "../../hooks/gameChallenger";
import { themeLight } from "../../lib/theme";
import { resultPageStyles } from "./ResultPageStyles";
import { GameState } from "../../shared/Redux/RootReducer";
import { setUserScore } from "../../shared/Redux/state/actions";
import { gameResult } from "../../enums/gameResultEnum";

function ResultBox() {
  const styles = resultPageStyles(themeLight);
  const dispatch = useDispatch();
  const gameState = useSelector<GameState, SelectedStateI>(
    (state) => state.selectedOption
  );

  const { systemSelectedResult } = useGameChallenger();

  const systemResult = useMemo(
    () => systemSelectedResult(gameState.selectedOption as gameButtonCategory),
    []
  );

  useEffect(() => {
    if (systemResult?.result) {
      switch (systemResult?.result) {
        case gameResult.DRAW:
          dispatch(setUserScore(0));
          break;
        case gameResult.WIN:
          dispatch(setUserScore(1));
          break;
        case gameResult.LOSE:
          dispatch(setUserScore(-1));
          break;
        default:
          break;
      }
      return;
    }
  }, [systemResult?.result]);

  return (
    <Box sx={styles.resultContainer}>
      <Box>
        <Typography sx={styles.selectedOptionText}>You Picked</Typography>
        <GameButton
          disabled
          buttonType={
            gameButtonCategory[gameState.selectedOption as gameButtonCategory]
          }
          borderColor={
            gameButtonColor[gameState.selectedOption as gameButtonCategory]
          }
        />
      </Box>
      <Box>
        <Typography sx={{ ...styles.selectedOptionText, ...styles.resultText }}>
          {systemResult?.result}
        </Typography>
        <Box component={Link} to="/home" sx={styles.link}>
          <Button variant="outlined" color="info">
            Play Again
          </Button>
        </Box>
      </Box>
      <Box>
        <Typography sx={styles.selectedOptionText}>System Picked</Typography>
        <GameButton
          disabled
          buttonType={
            gameButtonCategory[
              systemResult?.systemSelected as gameButtonCategory
            ]
          }
          borderColor={
            gameButtonColor[systemResult?.systemSelected as gameButtonCategory]
          }
        />
      </Box>
    </Box>
  );
}

export default ResultBox;
