import { Theme } from "@mui/material/styles";
import { classTypeI } from "../../interface/ClassTypes";

export const useStyles = (theme: Theme) =>
  ({
    root: {
      minHeight: "100vh",
      backgroundColor: "#fff",
      padding: "50px",
      paddingX: { sm: "89px" },
    },
  } as classTypeI);
