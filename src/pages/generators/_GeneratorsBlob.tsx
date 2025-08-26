import { useTranslation } from "react-i18next";

import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import PageBreadcrumbLayout from "@/components/layout/PageBreadcrumbLayout.tsx";

export default function GeneratorsIndex() {
  const { t } = useTranslation();

  return (
    <PageBreadcrumbLayout
      appName={t("application.name")}
      title={t("pages.generators.blob.title")}
      description={t("pages.generators.blob.description")}
    >
      <Typography variant="h4" component="h1" sx={{ textAlign: "center" }}>{t("pages.generators.blob.title")}</Typography>
      <Typography variant="h6" component="h2" sx={{ textAlign: "center" }}>{t("pages.generators.blob.subtitle")}</Typography>
      <Divider sx={{ my: 2 }} />
      <Stack
        spacing={1}
        sx={{
          py: 4,
          flexGrow: 1
        }}
      >
        <Stack
          direction="column"
          sx={{
            p: 2,
            height: "100%",
            backgroundColor: "background.paper",
            borderRadius: 1,
            boxShadow: (theme) => theme.shadows[1]
          }}
        ></Stack>
        <Stack
          direction="column"
          sx={{
            p: 2,
            height: "100%",
            backgroundColor: "background.paper",
            borderRadius: 1,
            boxShadow: (theme) => theme.shadows[1]
          }}
        ></Stack>
      </Stack>
    </PageBreadcrumbLayout>
  );
}