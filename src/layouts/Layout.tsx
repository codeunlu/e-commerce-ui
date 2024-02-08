import { Header, Footer } from "@layouts/index";
import { ReactElement } from "react";
import { Outlet } from "react-router-dom";

export default function Layout(): ReactElement {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
