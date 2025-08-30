// src/components/Layout.tsx
import { AppBar, Box, CssBaseline, Toolbar, Typography } from "@mui/material";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};
export const Layout = ({ children }: Props) => {
  return (
    <>
      <CssBaseline />
      <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
        {/* Header */}
        <AppBar
          position="static"
          elevation={1}
          color="primary"
          enableColorOnDark
        >
          <Toolbar>
            <Typography variant="h6" noWrap>
              CRM Sandbox
            </Typography>
          </Toolbar>
        </AppBar>

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
    </>
  );
};
