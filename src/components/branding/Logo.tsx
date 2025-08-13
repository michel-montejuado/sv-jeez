import { styled } from "@mui/material/styles";

import Paper from "@mui/material/Paper";

import { getSize, getRadius } from "@/utils/getLogoSizes.ts";

export type LogoProps = {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
}

const Rect = styled("rect")(({ theme }) => ({
  fill: theme.palette.primary.main
}));

const Path = styled("path")(({ theme }) => ({
  fill: "none",
  stroke: theme.palette.secondary.main,
  strokeWidth: 24,
  strokeLinecap: "square",
  strokeLinejoin: "bevel"
}));

export default function Logo({ size = "md" }: LogoProps) {
  return (
    <Paper
      sx={{
        width: getSize(size).width,
        height: getSize(size).height,
        borderRadius: getRadius(size),
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        backgroundColor: "background.paper",
        boxShadow: (theme) => theme.shadows[1]
      }}
    >
      <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <Rect x="0" y="0" width="32" height="32" />
        <Path>
          <animate
            attributeName="d"
            values="M23 32L15 28L27 25L25 21L29 18L20 14L24 11L25 7L20 4L21 0;
            M19 32L16 28L22 25L20 21L14 18L29 14L20 11L19 7L24 4L23 0;
            M23 32L23 28L17 25L25 21L23 18L26 14L16 11L24 7L15 4L25 0;
            M22 32L26 28L20 25L23 21L29 18L16 14L18 11L21 7L16 4L29 0;
            M25 32L29 28L17 25L28 21L17 18L24 14L27 11L30 7L16 4L26 0;
            M22 32L29 28L22 25L21 21L24 18L28 14L18 11L24 7L15 4L27 0;
            M23 32L15 28L27 25L25 21L29 18L20 14L24 11L25 7L20 4L21 0"
            dur="8s"
            repeatCount="indefinite" />
        </Path>
      </svg>
    </Paper>
  );
}