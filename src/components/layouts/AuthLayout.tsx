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

      <div className="image-container my-6 w-fit mx-auto">
        <Image
          src="/images/Katangwa.png"
          alt="app-logo"
          width={237}
          height={52}
        />
      </div>
      {children}
    </>
  );
};

export const getLayout = (page: ReactElement) => (
  <AuthLayout>{page}</AuthLayout>
);

export default AuthLayout;
