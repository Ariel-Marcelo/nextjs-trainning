import React from "react";
import {Navbar} from "@components/Navbar";

const Layout = ({children}: ChildrenType) => {
  return (
    <div className="layout">
      <Navbar /> 
      {children}
      <footer> Este es un footer </footer> 
    </div>
  );
};

export { Layout };
