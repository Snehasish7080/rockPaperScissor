import { Theme } from "@mui/material/styles";
import { classTypeI } from "../../interface/ClassTypes";

export const gameButtonStyles = (theme: Theme, color?: string) =>
  ({
    gameButton: {
      border: `solid 15px ${color}`,
      width: "180px",
      height: "180px",
      backgroundColor: "white",
      "&:hover": {
        backgroundColor: "white",
      },
      "&:disabled": {
        backgroundColor: "white",
      },
    },
    icon: {
      fontSize: 50,
      color: "#3C4362",
    },
  } as classTypeI);
