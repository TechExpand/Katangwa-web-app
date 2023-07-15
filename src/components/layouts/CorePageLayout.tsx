import Image from "next/image";
import React, { FC, ReactElement, ReactNode, useEffect } from "react";
import Footer from "../footer/Footer";
import PageNavbar from "../navbar/PageNavbar";

type CorePageLayoutProps = {
  children: ReactNode;
};
const CorePageLayout: FC<CorePageLayoutProps> = ({ children }) => {
  return (
    <>
      <PageNavbar />

      <div className="nav-underlay mt-16 h-20 md:h-28 bg-transparent w-full"></div>
      {children}
      <Footer />
    </>
  );
};

export const getLayout = (page: ReactElement) => (
  <CorePageLayout>{page}</CorePageLayout>
);

export default CorePageLayout;
