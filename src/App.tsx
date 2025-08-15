import { BrowserRouter, Route, Routes } from "react-router";

import { ThemeProvider } from "@mui/material/styles";

import CssBaseline from "@mui/material/CssBaseline";

import Layout from "@/pages/_Layout.tsx";
import CatchAll from "@/pages/CatchAll.tsx";
import Index from "@/pages/Index.tsx";

import theme from "@/theme/index.ts";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <BrowserRouter basename="/sv-jeez/">
        <Routes>
          <Route path="" element={<Layout />}>
            <Route index element={<Index />} />

            <Route path="*" element={<CatchAll />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
