import Image from "next/image";
import { useRouter } from "next/router";
import React, { FC, ReactElement, ReactNode, useEffect } from "react";
import Footer from "../footer/Footer";
import PageNavbar from "../navbar/PageNavbar";

type CorePageLayoutProps = {
  children: ReactNode;
};
const CorePageLayout: FC<CorePageLayoutProps> = ({ children }) => {
  const router = useRouter();
  return (
    <>
      <PageNavbar />

      <div
        className={`nav-underlay mt-16 ${
          router.pathname !== "/onboarding" && "h-14"
        } md:h-28 bg-transparent w-full`}
      ></div>
      {children}
      <Footer />
    </>
  );
};

export const getLayout = (page: ReactElement) => (
  <CorePageLayout>{page}</CorePageLayout>
);

export default CorePageLayout;
