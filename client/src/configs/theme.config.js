import { createTheme } from "@mui/material/styles";
import { colors } from "@mui/material";

export const themeModes = {
  light: "light",
  dark: "dark",
};
const themeConfigs = {
  custom: ({ mode }) => {
    const customPalette =
      mode === themeModes.dark
        ? {
            primary: {
              main: "#ff0000",
              contrastText: "#fff",
            },
            secondary: {
              main: "#ff0000",
              contrastText: "#fff",
            },
            background: {
              default: "#000",
              paper: "#131313",
            },
          }
        : {
            primary: {
              main: "#ff0000",
            },
            secondary: {
              main: "#f44336",
            },
            background: {
              default: colors.grey["100"],
            },
          };
    return createTheme({
      palette: {
        mode,
        ...customPalette,
      },
      components: {
        MuiButton: {
          defaultProps: { disableElevation: true },
        },
      },
    });
  },
};

export default themeConfigs;
