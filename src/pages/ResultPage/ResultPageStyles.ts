import { Theme } from "@mui/material/styles";
import { classTypeI } from "../../interface/ClassTypes";

export const resultPageStyles = (theme: Theme) =>
  ({
    mainContainer: {
      backgroundColor: theme.palette.primary.main,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    resultContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      width: "50%",
      marginTop: "100px",
    },
    selectedOptionText: {
      fontSize: 20,
      fontWeight: 500,
      fontFamily: "Oswald",
      color: "white",
      marginBottom: "30px",
    },
    resultText: {
      marginBottom: "10px",
    },
    link: {
      textDecoration: "none",
    },
  } as classTypeI);
