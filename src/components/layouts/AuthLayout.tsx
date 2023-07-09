import Image from "next/image";
import React, { FC, ReactElement, ReactNode, useEffect } from "react";
import AuthNavbar from "../navbar/AuthNavbar";


type AuthLayoutProps = {
  children: ReactNode;
};
const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  return (
    <>
      <AuthNavbar />
      <div
        className="w-full pb-10"
        style={{
          backgroundImage: `url(/images/BG.png)`,
          width: "100vw",
          height: "100%",
        }}
      >
        <div className="image-container relative w-[167px] my-6 md:w-fit ml-16 mr-auto md:mx-auto">
          <Image
            src="/images/logoKat.png"
            alt="app-logo"
            width={237}
            height={52}
          />
          <div className="italic font-bold text-xs absolute text-black -right-32 bottom-0 md:-right-28">
            Exchange with connections
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export const getLayout = (page: ReactElement) => (
  <AuthLayout>{page}</AuthLayout>
);

export default AuthLayout;
