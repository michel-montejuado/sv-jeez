import { type ReactNode } from "react";

import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export type PageSectionProps = {
  title?: string;
  subtitle?: string;
  children: ReactNode;
}

export default function PageSection({ title, subtitle, children }: PageSectionProps) {
  return (
    <Stack sx={{ my: 12, display: "flex", flexDirection: "column" }}>
      {title && <Typography variant="h5" component="h3" sx={{ mb: subtitle ? 0 : 4, textAlign: "center" }}>{title}</Typography>}
      {subtitle && <Typography variant="h6" component="h4" sx={{ mb: 4, textAlign: "center" }}>{subtitle}</Typography>}
      {children}
    </Stack>
  );
}