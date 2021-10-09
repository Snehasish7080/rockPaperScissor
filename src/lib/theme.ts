import { grey } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const themeLight = createTheme({
  palette: {
    primary: {
      main: "#181e40",
    },
    secondary: {
      main: "rgba(24, 30, 64, 1, 0.77)",
    },
  },
  spacing: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 64],
});

export { themeLight };
