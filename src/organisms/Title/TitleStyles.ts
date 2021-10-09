import { Theme } from "@mui/material/styles";
import { classTypeI } from "../../interface/ClassTypes";

export const titleStyles = (theme: Theme) =>
  ({
    headingContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      border: `solid 1px ${theme.palette.grey[400]}`,
      width: "40%",
      borderRadius: "8px",
      paddingX: "20px",
      paddingY: "10px",
    },
    titleText: {
      fontSize: 24,
      fontWeight: 500,
      color: theme.palette.grey[300],
      fontFamily: "Oswald",
    },
    scoreContainer: {
      backgroundColor: theme.palette.grey[300],
      height: 100,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "8px",
      paddingX: "30px",
    },
    scoreTitleText: {
      fontSize: 15,
      color: theme.palette.grey[800],
    },
    scoreText: {
      fontSize: 24,
      fontWeight: 500,
      color: theme.palette.grey[800],
    },
  } as classTypeI);
