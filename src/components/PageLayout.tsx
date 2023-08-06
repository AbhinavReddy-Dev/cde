import React from "react";
import Navigation from "./Navigation";

const PageLayout = ({ children }) => {
  return (
    <>
      <Navigation />
      <main className=" m-3 md:m-5">{children}</main>
    </>
  );
};

export default PageLayout;
