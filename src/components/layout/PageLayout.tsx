import { type ReactNode } from "react";

import Container from "@mui/material/Container";

export type PageLayoutProps = {
  children: ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <Container maxWidth="xl">
      {children}
    </Container>
  );
}