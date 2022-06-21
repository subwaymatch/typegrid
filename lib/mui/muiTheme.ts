import { createTheme } from "@mui/material/styles";

const muiTheme = createTheme({
  typography: {
    fontFamily: ["Inter", "sans-serif"].join(","),
    fontSize: 16,
    button: {
      textTransform: "none",
      letterSpacing: "-0.01rem",
    },
    body1: {
      fontSize: "1.2rem",
      letterSpacing: "-0.015rem",
    },
    body2: {
      fontSize: "1.1rem",
      letterSpacing: "-0.015rem",
    },
  },
});

export default muiTheme;
