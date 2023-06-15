import Image from "next/image";
import React, { FC, ReactNode } from "react";
import AuthContainer from "../containers/AuthContainer";
import AuthNavbar from "../navbar/AuthNavbar";

type AuthLayoutProps = {
  children: ReactNode;
  title: string;
  subtext: string;
};
const AuthLayout: FC<AuthLayoutProps> = ({ children, title, subtext }) => {
  return (
    <>
      <AuthNavbar />
      <AuthContainer title={title} subtext={subtext}>
        {children}
      </AuthContainer>
    </>
  );
};

export default AuthLayout;
