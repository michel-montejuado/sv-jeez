import { type ReactNode } from "react";

import Container from "@mui/material/Container";

import { usePageMetas } from "@/hooks/usePageMetas.ts";

export type PageLayoutProps = {
  appName?: string;
  title?: string;
  description?: string;
  children: ReactNode;
}

export default function PageLayout({
  appName,
  title,
  description,
  children
}: PageLayoutProps) {
  usePageMetas(title ?? "", description ?? "", appName ?? "");

  return (
    <Container maxWidth="xl">
      {children}
    </Container>
  );
}