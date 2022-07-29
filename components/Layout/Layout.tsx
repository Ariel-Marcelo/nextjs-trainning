import React from "react";
import Navbar from "@components/Navbar/Navbar";
import { AppProps } from "next/app";
import { FC } from "react";

const Layout: FC = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <footer> Este es un footer </footer>
    </div>
  );
};

export { Layout };
