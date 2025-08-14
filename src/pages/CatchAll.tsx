import { Link as RouterLink, useNavigate } from "react-router";

import { useTranslation } from "react-i18next";

import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import Logo from "@/components/branding/Logo.tsx";
import Hero from "@/components/surfaces/Hero.tsx";

import { usePageMetas } from "@/hooks/usePageMetas.ts";

export default function CatchAll() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  usePageMetas(t("pages.catch-all.title"), t("pages.catch-all.description"), t("application.name"));

  return (
    <Container maxWidth="md" sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
      <Hero
        actions={
          <Stack direction="row" spacing={2} justifyContent="center" sx={{ my: 4 }}>
            <Button variant="contained" color="primary" component={RouterLink} to="/">{t("pages.catch-all.actions.home")}</Button>
            <Button variant="contained" color="secondary" onClick={() => navigate(-1)}>{t("pages.catch-all.actions.previous")}</Button>
          </Stack>
        }
        sx={{ textAlign: "center", mt: 24 }}
      >
        <Logo size="md" />
        <Typography variant="h3" component="h1" sx={{ textAlign: "center" }}>{t("pages.catch-all.title")}</Typography>
        <Typography variant="h5" component="h2" sx={{ textAlign: "center" }}>{t("pages.catch-all.description")}</Typography>
      </Hero>
    </Container>
  )
}
