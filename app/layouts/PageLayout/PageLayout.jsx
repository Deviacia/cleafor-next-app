import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const PageLayout = ({ children, lng, path }) => {
  return (
    <>
      <Navbar lng={lng} path={path} />
      {children}
      <Footer />
    </>
  );
};

export default PageLayout;
