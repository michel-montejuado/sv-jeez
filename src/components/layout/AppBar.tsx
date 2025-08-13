import { type ReactNode } from "react";

import { Link as RouterLink } from "react-router";

import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

import { styled } from "@mui/material/styles";

import MuiAppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import MuiToolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export type AppBarProps = {
  toggleDrawer: (newOpen: boolean) => () => void;
  logo: ReactNode;
  appName: string;
  sideMenu: ReactNode;
  colorModeDropdown: ReactNode;
}

const Toolbar = styled(MuiToolbar)({
  width: "100%",
  padding: "12px",
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  justifyContent: "center",
  gap: "12px",
  flexShrink: 0,
});

export default function AppBar({
  toggleDrawer,
  logo,
  appName,
  sideMenu,
  colorModeDropdown
}: AppBarProps) {

  return (
    <MuiAppBar
      position="fixed"
      color="transparent"
      sx={{
        display: "auto",
        borderBottom: "1px solid",
        borderColor: "divider",
        backdropFilter: "blur(20px)",
        boxShadow: (theme) => theme.shadows[2]
      }}
    >
      <Toolbar variant="dense">
        <Stack
          direction="row"
          sx={{
            alignItems: "center",
            flexGrow: 1,
            width: "100%",
            gap: 1,
          }}
        >
          {sideMenu}
          <Stack
            direction="row"
            spacing={1}
            sx={{ alignItems: "center", mr: "auto" }}
          >
            <IconButton aria-label="menu" onClick={toggleDrawer(true)}>
              <MenuRoundedIcon />
            </IconButton>
            <Stack
              direction="row"
              spacing={2}
              component={RouterLink}
              to="/"
              sx={{ alignItems: "center", mr: "auto", textDecoration: "none" }}
            >
              {logo}
              <Typography variant="h6" sx={{ color: "primary.main", fontWeight: "bold" }}>
                {appName}
              </Typography>
            </Stack>
          </Stack>
          {colorModeDropdown}
        </Stack>
      </Toolbar>
    </MuiAppBar>
  );
}