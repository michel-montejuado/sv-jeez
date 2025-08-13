import { LogoProps } from "@/components/branding/Logo.tsx";

export function getSize(size: LogoProps["size"]): {
  width: string;
  height: string;
} {
  switch (size) {
    case "xs":
      return {
        width: "1rem",
        height: "1rem"
      };
    case "sm":
      return {
        width: "2rem",
        height: "2rem"
      };
    case "md":
      return {
        width: "3rem",
        height: "3rem"
      };
    case "lg":
      return {
        width: "4rem",
        height: "4rem"
      };
    case "xl":
      return {
        width: "5rem",
        height: "5rem"
      };
    default:
      return {
        width: "3rem",
        height: "3rem"
      };
  }
}

export function getRadius(size: LogoProps["size"]): number {
  switch (size) {
    case "xs":
      return 2;
    case "sm":
      return 2;
    case "md":
      return 3;
    case "lg":
      return 4;
    case "xl":
      return 5;
    default:
      return 3;
  }
}
