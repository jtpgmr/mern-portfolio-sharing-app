import { createTheme, colors } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: colors.indigo.A400
    },
    secondary: {
      main: colors.deepPurple[500]
    },
    error: {
      main: "#d32f2f"
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  }
});

export default theme;