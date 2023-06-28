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
    <>
      <div className="mx-auto text-center auth-container px-20 flex flex-col items-center py-8 w-[729px]">
        <div className="pb-5 w-[506px] mx-auto space-y-4">
          <h1 className="leading-10 font-semibold text-3xl">{title}</h1>
          <p className="font-nunito text-[#353945]">{subtext}</p>
        </div>
        {children}
      </div>
    </>
  );
};

export default AuthContainer;
