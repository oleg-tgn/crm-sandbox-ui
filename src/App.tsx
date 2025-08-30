import { PatientsPage } from "./features/patients/PatientsPage";
import { Layout } from "./components/Layout";
import {
  ThemeProvider,
  createTheme,
  type ThemeOptions,
} from "@mui/material/styles";
import { useState } from "react";

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
  const [page, setPage] = useState("patients");

  return (
    <ThemeProvider theme={darkTheme}>
      <Layout onNavigate={setPage}>
        {page === "patients" && <PatientsPage />}
        {/* 
          {page === "appointments" && <AppointmentsPage />}
          {page === "doctors" && <DoctorsPage />} 
        */}
      </Layout>
    </ThemeProvider>
  );
};
