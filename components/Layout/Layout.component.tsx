import React, { ReactNode } from "react";
import Footer from "../Footer/Footer.component";
import Style from "./Layout.module.scss";
import TopNav from "../TopNav/TopNav.component";
import Toc, { TOCProps } from "../TOC/TOC.component";

type LayoutProps = {
  children: ReactNode;
  TOC?: TOCProps;
};

export default function Layout({ children, TOC }: LayoutProps) {
  return (
    <div className="wrapper">
      {TOC ? <Toc content={TOC} /> : ""}
      <TopNav />
      <div className={Style.wrapper__content}>{children}</div>
      <Footer />
    </div>
  );
}
