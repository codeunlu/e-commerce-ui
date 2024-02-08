import { createBrowserRouter } from "react-router-dom";
import { Layout } from "@layouts/index";
import { Home } from "@pages/index";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "product/:id",
        element: <Home />,
      },
    ],
  },
]);
