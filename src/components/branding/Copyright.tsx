import { type ReactNode } from "react";

import { Link as RouterLink } from "react-router";

import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

import { getCopyrightYear } from "@/utils/getCopyrightYear.ts";

export type CopyrightProps = {
  copyrightText: string;
  logo: ReactNode
  appName: string;
  year: number;
  allRightsReservedText: string;
}

export default function Copyright({
  copyrightText,
  logo,
  year,
  appName,
  allRightsReservedText
}: CopyrightProps) {
  return (
    <Box
      sx={{
        mx: "auto",
        p: 2,
        display: "flex",
        flexDirection: {
          xs: "column",
          md: "row",
        },
        alignItems: "center",
        gap: 1,
        fontSize: "0.875rem",
        fontWeight: "400",
        lineHeight: "1.5",
        letterSpacing: "0.00938em"
      }}
    >
      <Typography variant="body2">
        {copyrightText}
        {" © "}
        {getCopyrightYear(year)}
      </Typography>
      <Typography variant="body2" sx={{ display: { xs: "none", sm: "block" } }}>
        {"•"}
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        {logo}
        <Link
          color="inherit"
          component={RouterLink}
          to="/"
          sx={{
            fontWeight: "bold",
            color: "primary.main",
            textDecoration: "none",
            "&:hover": {
              textDecoration: "underline",
            },
          }}
        >
          {appName}
        </Link>
      </Box>
      <Typography variant="body2" sx={{ display: { xs: "none", sm: "block" } }}>
        {"•"}
      </Typography>
      <Typography variant="body2">
        {allRightsReservedText}
      </Typography>
    </Box>
  );
}