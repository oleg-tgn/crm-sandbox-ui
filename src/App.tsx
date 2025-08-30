import { PatientsPage } from "./features/patients/PatientsPage";
import { Layout } from "./components/Layout";
import {
  ThemeProvider,
  createTheme,
  type ThemeOptions,
} from "@mui/material/styles";

const themeOptions: ThemeOptions = {
  palette: {
    mode: "dark",
    primary: {
      main: "#5893df",
    },
    secondary: {
      main: "#2ec5d3",
    },
    background: {
      default: "#192231",
      paper: "#24344d",
    },
  },
};

export const App = () => {
  const darkTheme = createTheme(themeOptions);

  return (
    <ThemeProvider theme={darkTheme}>
      <Layout>
        <PatientsPage />
      </Layout>
    </ThemeProvider>
  );
};
