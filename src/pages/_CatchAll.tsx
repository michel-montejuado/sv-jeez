import { Link as RouterLink, useNavigate } from "react-router";

import { useTranslation } from "react-i18next";

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import PageBlankLayout from "@/components/layout/PageBlankLayout.tsx";
import Hero from "@/components/surfaces/Hero.tsx";

import gradient from "@/theme/gradient.ts";

export default function CatchAll() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <PageBlankLayout
      appName={t("application.name")}
      title={t("pages.catch-all.title")}
      description={t("pages.catch-all.description")}
    >
      <Hero
        cta={
          <Stack direction={{ xs: "column", md: "row" }} spacing={2} justifyContent="center" sx={{ my: 4 }}>
            <Button variant="contained" color="primary" component={RouterLink} to="/">{t("pages.catch-all.actions.home")}</Button>
            <Button variant="contained" color="secondary" onClick={() => navigate(-1)}>{t("pages.catch-all.actions.previous")}</Button>
          </Stack>
        }
        sx={{
          textAlign: "center",
          my: 20,
          color: "primary.contrastText",
          backgroundImage: gradient
        }}
      >
        <Typography variant="h3" component="h1" sx={{ textAlign: "center" }}>{t("pages.catch-all.title")}</Typography>
        <Typography variant="h5" component="h2" sx={{ textAlign: "center" }}>{t("pages.catch-all.description")}</Typography>
      </Hero>
    </PageBlankLayout>
  )
}
