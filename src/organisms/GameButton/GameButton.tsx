import { IconButton, IconButtonProps } from "@mui/material";
import React, { ReactNode } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import PaperIcon from "../../assets/icons/PaperIcon";
import RockIcon from "../../assets/icons/RockIcon";
import ScissorIcon from "../../assets/icons/ScissorIcon";
import { gameButtonCategory } from "../../enums/gameEnum";
import { themeLight } from "../../lib/theme";
import { setSelectedOption } from "../../shared/Redux/state/actions";
import { gameButtonStyles } from "./GameButtonStyles";

type GameButtonProps = {
  borderColor?: string;
  buttonType?: gameButtonCategory;
} & IconButtonProps;
function GameButton({
  borderColor,
  sx,
  buttonType,
  ...props
}: GameButtonProps) {
  const styles = gameButtonStyles(themeLight, borderColor);
  const dispatch = useDispatch();
  const history = useHistory();
  const onClickGameButton = () => {
    if (buttonType) {
      dispatch(setSelectedOption(buttonType));
      history.push("/result");
    }
  };
  const setButtonIcon = () => {
    switch (buttonType) {
      case gameButtonCategory.ROCK:
        return <RockIcon sx={styles.icon} />;
      case gameButtonCategory.PAPER:
        return <PaperIcon sx={styles.icon} />;
      case gameButtonCategory.SCISSOR:
        return <ScissorIcon sx={styles.icon} />;
    }
  };
  return (
    <IconButton
      sx={{ ...styles.gameButton, ...sx }}
      {...props}
      onClick={onClickGameButton}
    >
      {setButtonIcon()}
    </IconButton>
  );
}

export default GameButton;
