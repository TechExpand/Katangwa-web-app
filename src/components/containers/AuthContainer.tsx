import { Box, Paper } from "@mui/material";
import Image from "next/image";
import React, { FC, ReactNode } from "react";
import CustomButton from "../button/CustomButton";
import CustomInput from "../input/CustomInput";
import AuthNavbar from "../navbar/AuthNavbar";

type AuthContainerProps = {
  children: ReactNode;
  title: string;
  subtext: string;
};
const AuthContainer: FC<AuthContainerProps> = ({
  children,
  title,
  subtext,
}) => {
  return (
    <div className="mx-auto text-center auth-container px-20 flex flex-col items-center py-8 mt-4 w-[729px]">
      <div className="image-container">
        <Image
          src="/images/Katangwa.png"
          alt="app-logo"
          width={237}
          height={52}
        />
      </div>
      <div className="pt-5 pb-5 space-y-4 w-full mt-6">
        <h1 className="leading-10 font-semibold text-3xl">{title}</h1>
        <p className="font-nunito text-[#353945]">{subtext}</p>
      </div>
      <div className="shadow-lg rounded-lg w-[506px] px-8 py-12 space-y-7">
        {children}
      </div>
    </div>
  );
};

export default AuthContainer;
