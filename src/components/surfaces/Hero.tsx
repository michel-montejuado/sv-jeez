import { type ReactNode } from "react";

import { type Theme } from "@emotion/react";
import { type SxProps } from "@mui/material";

import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";

export type HeroProps = {
  color?: string;
  children: ReactNode;
  cta?: ReactNode;
  sx?: SxProps<Theme>
};

export default function Hero({ color, children, cta, sx }: HeroProps) {
  return (
    <Stack
      spacing={2}
      sx={{
        my: 2,
        p: 3,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: color ? `${color}.contrastText` : "inherit",
        backgroundColor: color ? `${color}.main` : "inherit",
        borderRadius: 4,
        boxShadow: (theme) => theme.shadows[2],
        ...sx
      }}
    >
      {children}
      {
        cta && (
          <>
            <Divider />
            <Stack direction="row" spacing={2} justifyContent="center" sx={{ my: 4 }}>
              {cta}
            </Stack>
          </>
        )
      }
    </Stack>
  )
}