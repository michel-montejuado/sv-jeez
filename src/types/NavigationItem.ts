import { type ReactNode } from "react";

export type NavigationItem = {
  text: string;
  description: string;
  icon: ReactNode;
  to: string;
  children?: NavigationItem[];
}
