import { CssBaseline, AppBar, Toolbar, Typography, Box } from "@mui/material";
import { PatientsPage } from "./features/patients/PatientsPage";
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
      <CssBaseline />
      <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
        <AppBar
          position="static"
          elevation={1}
          color="primary"
          enableColorOnDark
        >
          <Toolbar>
            <Typography variant="h6">CRM Sandbox</Typography>
          </Toolbar>
        </AppBar>

        <Box component="main" sx={{ flex: 1, minHeight: 0, display: "flex" }}>
          <PatientsPage />
        </Box>

        <Box
          sx={{ p: 1.5, borderTop: "1px solid #0c01010c", textAlign: "center" }}
        >
          <Typography variant="caption">
            © {new Date().getFullYear()} CRM Sandbox
          </Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
};
