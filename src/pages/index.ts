import { createBrowserRouter } from "react-router";

import GeneratorsIndex from "./generators/_GeneratorsIndex.tsx";
import GeneratorBlob from "./generators/_GeneratorsBlob.tsx";

import CatchAll from "@/pages/_CatchAll.tsx";
import Home from "@/pages/_Home.tsx";
import Layout from "@/pages/_Layout.tsx";

export default createBrowserRouter([
  {
    path: "",
    Component: Layout,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: "generators",
        children: [
          {
            index: true,
            Component: GeneratorsIndex
          },
          {
            path: "blob",
            Component: GeneratorBlob
          }
        ]
      },
      {
        path: "*",
        Component: CatchAll
      }
    ]
  }
], {
  basename: "/sv-jeez"
});