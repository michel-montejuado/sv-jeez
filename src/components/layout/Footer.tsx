import { type ReactNode } from "react";

import Box from "@mui/material/Box";

export type FooterProps = {
  children: ReactNode;
}

export default function Footer({ children }: FooterProps) {
  return (
    <Box
      component="footer"
      sx={{
        p: 4,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        color: "text.secondary",
        backgroundColor: "background.paper",
        borderRadius: 4,
        boxShadow: (theme) => theme.shadows[2]
      }}>
      {children}
    </Box>
  );
}