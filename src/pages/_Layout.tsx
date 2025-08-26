import { useState } from "react";

import { Link as RouterLink, Outlet } from "react-router";

import { useTranslation } from "react-i18next";

import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import HelpRoundedIcon from "@mui/icons-material/HelpRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";

import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { type NavigationItem } from "@/types/NavigationItem.ts";

import Logo from "@/components/branding/Logo.tsx";
import Copyright from "@/components/layout/Copyright.tsx";
import Footer from "@/components/layout/Footer.tsx";
import AppBar from "@/components/navigation/AppBar.tsx";
import SideMenu from "@/components/navigation/SideMenu.tsx";
import ColorModeIconDropdown from "@/components/theme/ColorModeSelect.tsx";

const primaryNavigation: NavigationItem[] = [
  {
    text: "navigation.primary.generators.text",
    description: "navigation.primary.generators.description",
    icon: <AutoAwesomeIcon />,
    to: "/generators"
  },
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
        <Grid container spacing={8}>
          <Grid size={{ xs: 12, md: 1 }} sx={{ my: "auto", display: { xs: "flex", md: "block" } }}>
            <Logo size="lg" sx={{ mx: "auto" }} />
          </Grid>
          <Grid size={{ xs: 12, md: 5 }} sx={{ my: "auto", mx: "auto" }}>
            <Typography variant="body1" sx={{ textAlign: { xs: "center", md: "left" } }}>SVJeez is a free tool dedicated to making the web more vibrant and animated.<br />
              Create and export stunning SVGs with zero code.</Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 2 }}>
            <Stack direction="column" spacing={2}>
              <Typography variant="h6" sx={{ textAlign: { xs: "center", md: "left" } }}>Product</Typography>
              <Link component={RouterLink} to="/" sx={{ textAlign: { xs: "center", md: "left" } }}>Generators</Link>
              <Link component={RouterLink} to="/" sx={{ textAlign: { xs: "center", md: "left" } }}>About</Link>
              <Link component={RouterLink} to="/" sx={{ textAlign: { xs: "center", md: "left" } }}>Feedback</Link>
              <Link component={RouterLink} to="/" sx={{ textAlign: { xs: "center", md: "left" } }}>Changelog</Link>
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, md: 2 }}>
            <Stack direction="column" spacing={2}>
              <Typography variant="h6" sx={{ textAlign: { xs: "center", md: "left" } }}>Resources</Typography>
              <Link component={RouterLink} to="/" sx={{ textAlign: { xs: "center", md: "left" } }}>Documentation</Link>
              <Link component={RouterLink} to="/" sx={{ textAlign: { xs: "center", md: "left" } }}>Tutorials</Link>
              <Link component={RouterLink} to="/" sx={{ textAlign: { xs: "center", md: "left" } }}>Blog</Link>
              <Link component={RouterLink} to="/" sx={{ textAlign: { xs: "center", md: "left" } }}>FAQs</Link>
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, md: 2 }}>
            <Stack direction="column" spacing={2}>
              <Typography variant="h6" sx={{ textAlign: { xs: "center", md: "left" } }}>Community</Typography>
              <Link component={RouterLink} to="/" sx={{ textAlign: { xs: "center", md: "left" } }}>GitHub</Link>
            </Stack>
          </Grid>
        </Grid>
        <Divider sx={{ mt: 8, mb: 2 }}>
          <Chip label="Made with ❤️ in Nougaroulet, France." size="small" />
        </Divider>
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