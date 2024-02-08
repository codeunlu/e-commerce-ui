import Footer from "@components/Footer";
import Header from "@components/Header";
import { ReactElement, ReactNode } from "react";
import { Outlet } from "react-router-dom";

interface LayoutProps {
  children?: ReactNode;
}

export default function Layout({ children }: LayoutProps): ReactElement {
  return (
    <div>
      <Header />
      <Outlet />
      {children}
      <Footer />
    </div>
  );
}
