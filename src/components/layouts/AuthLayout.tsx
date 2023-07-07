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
        className="w-full"
        style={{
          backgroundImage: `url(/images/BG.png)`,
          width: "100vw",
          height: "100vh",
        }}
      >
        <div className="image-container my-6 w-fit mx-auto">
          <Image
            src="/images/logoKat.png"
            alt="app-logo"
            width={237}
            height={52}
          />
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
