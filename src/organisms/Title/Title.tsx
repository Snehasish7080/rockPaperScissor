import React, { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { themeLight } from "../../lib/theme";
import { GameState } from "../../shared/Redux/RootReducer";
import { titleStyles } from "./TitleStyles";
import { SelectedStateI } from "../../shared/Redux/state/reducer";
import { SignUpStateI } from "../../shared/Redux/signUp/reducer";
import { setNewScore } from "../../shared/Redux/state/scoreEffect";
import { SxProps } from "@mui/system";

type TitleProps = {
  sx?: SxProps;
};
function Title({ sx }: TitleProps) {
  const styles = titleStyles(themeLight);
  const dispatch = useDispatch();
  const gameState = useSelector<GameState, SelectedStateI>(
    (state) => state.selectedOption
  );
  const userState = useSelector<GameState, SignUpStateI>(
    (state) => state.signUp
  );
  useEffect(() => {
    dispatch(
      setNewScore({
        userName: userState.user.userName,
        score: gameState.score,
      })
    );
  }, [gameState.score]);

  return (
    <Box sx={{ ...styles.headingContainer, ...sx }}>
      <Box sx={styles.titleContainer}>
        {["Rock", "Paper", "Scissors"].map((item, index) => {
          return (
            <Typography align="left" sx={styles.titleText} key={item + index}>
              {item}
            </Typography>
          );
        })}
      </Box>
      <Box sx={styles.scoreContainer}>
        <Typography sx={styles.scoreTitleText}>score</Typography>
        <Typography sx={styles.scoreText}>{gameState.score}</Typography>
      </Box>
    </Box>
  );
}

export default Title;
