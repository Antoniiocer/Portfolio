import { createTheme } from "@mui/material/styles";

const colors = {
  light: "#E3D3D3",
  red: "#E24053",
  darkBlue: "#07234F",
  orange1: "#ED9C45",
  turquoise: "#099096",
  orange2: "#F2A950",
};

const theme = createTheme({
  palette: {
    primary: {
      main: colors.darkBlue,
    },
    secondary: {
      main: colors.turquoise,
    },
    error: {
      main: colors.red,
    },
    warning: {
      main: colors.orange1,
    },
    info: {
      main: colors.turquoise,
    },
    success: {
      main: colors.orange2,
    },
    background: {
      default: colors.light,
    },
  },
  typography: {
    fontFamily: "Muli, sans-serif",
  },
});

export default theme;
