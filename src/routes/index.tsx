import { createBrowserRouter } from "react-router-dom";
import { Layout } from "@layouts/index";
import { Home } from "@pages/index";
import ProductDetail from "@/pages/ProductDetail";

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
        element: <ProductDetail />,
      },
    ],
  },
]);
