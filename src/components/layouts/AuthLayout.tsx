import { Box } from "@mui/material";
import Image from "next/image";
import React, { FC, ReactElement, ReactNode, useEffect } from "react";
import AuthNavbar from "../navbar/AuthNavbar";

type AuthLayoutProps = {
  children: ReactNode;
};
const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  return (
    <Box>
      <AuthNavbar />

      <div
        className="w-full pb-10 pt-[2.148125rem]"
        style={{
          backgroundImage: `url(/images/BG.png)`,
          width: "100vw",
          height: "100%",
        }}
      >
        <div className="image-container relative w-[167px] mb-3 md:w-fit ml-16 mr-auto md:mx-auto">
          <Image
            src="/images/logoKat.png"
            alt="app-logo"
            width={262.533}
            height={68.028}
          />
          <div className="italic font-semibold text-xs absolute -right-32 bottom-0 md:-right-22">
            <p className="text-black">Exchange with connections</p>
          </div>
        </div>
        {children}
      </div>
    </Box>
  );
};

export const getLayout = (page: ReactElement) => (
  <AuthLayout>{page}</AuthLayout>
);

export default AuthLayout;
