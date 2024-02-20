import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: "#FFCB62",
    },
    secondary: {
      main: "#03dac6",
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
