import { Theme } from "@mui/material/styles";
import { classTypeI } from "../../interface/ClassTypes";

export const singUpPageStyles = (theme: Theme) =>
  ({
    mainContainer: {
      backgroundColor: theme.palette.primary.main,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    inputContainer: {
      width: "40%",
      marginTop: "100px",
    },
    inputField: {
      "& .MuiOutlinedInput-input": {
        color: "white",
      },
      marginBottom: "40px",
    },
  } as classTypeI);
