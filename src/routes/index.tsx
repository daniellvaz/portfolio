import { createBrowserRouter } from "react-router-dom";

import { PublicLayout } from "../pages/_layout/public";

import { Home } from "../pages/public/home";

export const router = createBrowserRouter(
  [
    {
      path: "",
      element: <PublicLayout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
      ],
    },
  ]
);
