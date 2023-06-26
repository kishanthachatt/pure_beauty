import * as React from "react";
import { LayoutProps as Props } from "./Layout.interface";
import { Header } from "../Header";
import { Outlet } from "react-router";
import { Footer } from "../Footer";

export function Layout(props: Props) {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
