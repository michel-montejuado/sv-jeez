import { useTranslation } from "react-i18next";

import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import PageBreadcrumbLayout from "@/components/layout/PageBreadcrumbLayout.tsx";
import LinkCard from "@/components/surfaces/LinkCard.tsx";

export default function GeneratorsIndex() {
  const { t } = useTranslation();

  return (
    <PageBreadcrumbLayout
      appName={t("application.name")}
      title={t("pages.generators.index.title")}
      description={t("pages.generators.index.description")}
    >
      <Typography variant="h3" component="h1" sx={{ textAlign: "center" }}>{t("pages.generators.index.title")}</Typography>
      <Typography variant="h5" component="h2" sx={{ textAlign: "center" }}>{t("pages.generators.index.subtitle")}</Typography>
      <Divider sx={{ my: 4 }} />
      <Grid container spacing={2} sx={{ py: 4 }}>
        {[
          {
            media: {
              image: "https://picsum.photos/seed/generators-blob/1600/900",
              alt: "Blob Generator"
            },
            title: t("pages.generators.index.cards[0].title"),
            description: t("pages.generators.index.cards[0].description"),
            to: "/generators/blob"
          }
        ].map((card, index) => (
          <Grid
            key={index}
            size={{
              xs: 12,
              sm: 6,
              md: 4
            }}
          >
            <LinkCard
              media={card.media}
              title={card.title}
              description={card.description}
              to={card.to}
            />
          </Grid>
        ))}
      </Grid>
    </PageBreadcrumbLayout>
  );
}