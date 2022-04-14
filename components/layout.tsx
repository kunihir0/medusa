import React, { ReactNode } from "react";
import Footer from "./footer";
import Header from "./header";

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = (props) => (
  <div>
    <Header/>
    <div className="layout">{props.children}</div>
    <Footer/>
  </div>
);

export default Layout
