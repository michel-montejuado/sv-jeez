import { useState } from "react";

import { Outlet } from "react-router";

import { useTranslation } from "react-i18next";

import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import HelpRoundedIcon from "@mui/icons-material/HelpRounded";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import Copyright from "@/components/branding/Copyright.tsx";
import Logo from "@/components/branding/Logo.tsx";
import AppBar from "@/components/layout/AppBar.tsx";
import SideMenu, { type NavigationItem } from "@/components/layout/SideMenu.tsx";
import Footer from "@/components/layout/Footer.tsx";
import ColorModeIconDropdown from "@/components/theme/ColorModeSelect.tsx";

const primaryNavigation: NavigationItem[] = [
];

const secondaryNavigation: NavigationItem[] = [
  {
    text: "navigation.secondary.settings.text",
    description: "navigation.secondary.settings.description",
    icon: <SettingsRoundedIcon />,
    to: "/settings"
  },
  {
    text: "navigation.secondary.about.text",
    description: "navigation.secondary.about.description",
    icon: <InfoRoundedIcon />,
    to: "/about"
  },
  {
    text: "navigation.secondary.feedback.text",
    description: "navigation.secondary.feedback.description",
    icon: <HelpRoundedIcon />,
    to: "/feedback"
  },
];

export default function RootLayout() {
  const { t } = useTranslation();

  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (value: boolean) => () => {
    setDrawerOpen(value);
  };

  return (
    <Container
      maxWidth={false}
      sx={{
        display: "flex",
        flexDirection: "column",
        pt: 8,
        pb: 3,
        minHeight: "100vh"
      }}>
      <AppBar
        logo={<Logo size="sm" />}
        appName={t("application.name")}
        sideMenu={<SideMenu
          open={drawerOpen}
          toggleDrawer={toggleDrawer}
          logo={<Logo size="sm" />}
          appName={t("application.name")}
          primaryNavigation={primaryNavigation.map((item) => ({
            text: t(item.text),
            description: t(item.description),
            icon: item.icon,
            to: item.to
          }))}
          secondaryNavigation={secondaryNavigation.map((item) => ({
            text: t(item.text),
            description: t(item.description),
            icon: item.icon,
            to: item.to
          }))}
        />}
        colorModeDropdown={<ColorModeIconDropdown />}
        toggleDrawer={toggleDrawer}
      />
      <Box
        component="main"
        sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}
      >
        <Outlet />
      </Box>
      <Footer>
        <Copyright
          copyrightText={t("application.copyright.text")}
          logo={<Logo size="xs" />}
          appName={t("application.name")}
          year={2025}
          allRightsReservedText={t("application.copyright.all-rights-reserved")}
        />
      </Footer>
    </Container >
  );
}