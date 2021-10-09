import React from "react";
import { Box } from "@mui/material";
import { gameButtonCategory } from "../../enums/gameEnum";
import { themeLight } from "../../lib/theme";
import GameButton from "../../organisms/GameButton/GameButton";
import { homePageStyles } from "./HomePageStyles";
import { gameButtonColor } from "../../enums/gameColorEnum";

function GameBox() {
  const styles = homePageStyles(themeLight);
  return (
    <Box sx={styles.gameButtonContainer}>
      <Box sx={styles.upperContainer}>
        <GameButton
          borderColor={gameButtonColor.ROCK}
          buttonType={gameButtonCategory.ROCK}
        />
        <GameButton
          borderColor={gameButtonColor.PAPER}
          buttonType={gameButtonCategory.PAPER}
        />
      </Box>
      <GameButton
        borderColor={gameButtonColor.SCISSOR}
        buttonType={gameButtonCategory.SCISSOR}
      />
    </Box>
  );
}

export default GameBox;
