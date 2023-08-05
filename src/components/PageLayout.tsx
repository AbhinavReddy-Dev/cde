import React from "react";
import Navigation from "./Navigation";

const PageLayout = ({ children }) => {
  return (
    <>
      <Navigation />
      <main className=" p-4">{children}</main>
    </>
  );
};

export default PageLayout;
