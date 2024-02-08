import { createBrowserRouter } from "react-router-dom";
import { Layout } from "@layouts/index";
import { ProductsPage, ProductDetailPage } from "@pages/index";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <ProductsPage />,
      },
      {
        path: "product/:id",
        element: <ProductDetailPage />,
      },
    ],
  },
]);
