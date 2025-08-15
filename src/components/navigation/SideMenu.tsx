import { type ReactNode } from "react";

import { Link as RouterLink, useLocation, useMatch } from "react-router";

import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

import Divider from "@mui/material/Divider";
import Drawer, { drawerClasses } from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export type SideMenuProps = {
  open: boolean | undefined;
  toggleDrawer: (newOpen: boolean) => () => void;
  appName: string
  primaryNavigation: NavigationItem[];
  secondaryNavigation: NavigationItem[];
}

export type NavigationItem = {
  text: string;
  description: string;
  icon: ReactNode;
  to: string;
}

export default function SideMenu({
  open,
  toggleDrawer,
  appName,
  primaryNavigation,
  secondaryNavigation
}: SideMenuProps) {
  const location = useLocation();
  const isActive = useMatch(location.pathname);

  return (
    <Drawer
      open={open}
      onClose={toggleDrawer(false)}
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        [`& .${drawerClasses.paper}`]: {
          backgroundColor: "background.paper"
        },
      }}
    >
      <Stack
        sx={{
          height: "100%",
        }}
      >
        <Stack
          direction="row"
          sx={{ px: 2, py: 2, gap: 4, alignItems: "center" }}>
          <IconButton onClick={toggleDrawer(false)}>
            <CloseRoundedIcon />
          </IconButton>
          <Typography
            variant="h6"
            component={RouterLink}
            to="/"
            onClick={toggleDrawer(false)}
            sx={{ color: "primary.main", fontWeight: "bold", textDecoration: "none" }}>
            {appName}
          </Typography>
        </Stack>
        <Divider />
        <Stack sx={{ flexGrow: 1 }}>
          <Stack sx={{ flexGrow: 1, justifyContent: "space-between" }}>
            <List dense>
              {primaryNavigation.map((item, index) => (
                <ListItem key={index} disablePadding>
                  <ListItemButton
                    selected={isActive?.pathname === item.to}
                    component={RouterLink}
                    to={item.to}
                    onClick={toggleDrawer(false)}
                  >
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.text} secondary={item.description} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <List dense>
              {secondaryNavigation.map((item, index) => (
                <ListItem key={index} disablePadding>
                  <ListItemButton
                    selected={isActive?.pathname === item.to}
                    component={RouterLink}
                    to={item.to}
                    onClick={toggleDrawer(false)}
                  >
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.text} secondary={item.description} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Stack>
        </Stack>
      </Stack>
    </Drawer>
  );
}