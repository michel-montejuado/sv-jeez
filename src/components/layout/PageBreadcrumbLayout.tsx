import { type ReactNode } from "react";

import Container from "@mui/material/Container";

import AppBreadcrumb from "@/components/navigation/AppBreadcrumb.tsx";

import { usePageMetas } from "@/hooks/usePageMetas.ts";

export type PageLayoutProps = {
  appName?: string;
  title?: string;
  description?: string;
  children: ReactNode;
}

export default function PageBreadcrumbLayout({
  appName,
  title,
  description,
  children
}: PageLayoutProps) {
  usePageMetas(title ?? "", description ?? "", appName ?? "");

  return (
    <>
      <AppBreadcrumb />
      <Container maxWidth="xl" sx={{ display: "flex", flexDirection: "column", height: "100%", flexGrow: 1 }}>
        {children}
      </Container>
    </>
  );
}