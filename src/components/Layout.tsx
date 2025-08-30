import {
  AppBar,
  Box,
  CssBaseline,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import type { ReactNode } from "react";
import PeopleIcon from "@mui/icons-material/People";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";

const drawerWidth = 240;

type Props = {
  children: ReactNode;
  onNavigate?: (page: string) => void;
};
export const Layout = ({ children, onNavigate }: Props) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <CssBaseline />

      {/* Header */}
      <AppBar position="static" color="primary" enableColorOnDark elevation={1}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            CRM Sandbox
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Container: sidebar + main */}
      <Box sx={{ flex: 1, minHeight: 0, display: "flex" }}>
        {/* Sidebar */}
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
              position: "relative",
              height: "100%",
            },
          }}
        >
          <Box sx={{ overflow: "auto" }}>
            <List>
              <ListItem disablePadding>
                <ListItemButton
                  onClick={() => onNavigate?.("patients")}
                  selected
                >
                  <ListItemIcon>
                    <PeopleIcon />
                  </ListItemIcon>
                  <ListItemText primary="Patients" />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton
                  onClick={() => onNavigate?.("appointments")}
                  disabled
                >
                  <ListItemIcon>
                    <CalendarMonthIcon />
                  </ListItemIcon>
                  <ListItemText primary="Appointments" />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton
                  onClick={() => onNavigate?.("doctors")}
                  disabled
                >
                  <ListItemIcon>
                    <LocalHospitalIcon />
                  </ListItemIcon>
                  <ListItemText primary="Doctors" />
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        </Drawer>

        {/* Main content area */}
        <Box
          component="main"
          sx={{
            flex: 1,
            minHeight: 0,
            display: "flex",
          }}
        >
          {children}
        </Box>
      </Box>

      {/* Footer */}
      <Box
        sx={{
          p: 1.5,
          borderTop: "1px solid #0c01010c",
          textAlign: "center",
        }}
      >
        <Typography variant="caption">
          © {new Date().getFullYear()} CRM Sandbox
        </Typography>
      </Box>
    </Box>
  );
};
