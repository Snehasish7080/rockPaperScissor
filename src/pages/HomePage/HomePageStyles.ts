import { Theme } from "@mui/material/styles";
import { classTypeI } from "../../interface/ClassTypes";

export const homePageStyles = (theme: Theme) =>
  ({
    mainContainer: {
      backgroundColor: theme.palette.primary.main,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    userHeader: {
      width: "100%",
    },
    userNameText: {
      fontFamily: "oswald",
      fontSize: 30,
      color: "white",
      fontWeight: 500,
      textDecoration: "underline",
    },
    gameButtonContainer: {
      width: "30%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      paddingY: "30px",
    },
    upperContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "30px",
    },

    //
    gameContainer: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    detailContainer: {
      width: "100%",
      display: "flex",
    },
    //
    topUserContainer: {
      width: "30%",
      height: "fit-content",
      border: "solid 1px white",
      borderRadius: "8px",
    },
    topUserHeader: {
      background: theme.palette.info.main,
      borderTopRightRadius: "8px",
      borderTopLeftRadius: "8px",
      paddingY: "5px",
    },
    topUserText: {
      fontFamily: "oswald",
      fontWeight: 500,
      fontSize: 20,
      color: "white",
    },
    topUserNameContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      paddingX: "50px",
      paddingY: "20px",
    },
    topUserNameContainerRow: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
  } as classTypeI);
