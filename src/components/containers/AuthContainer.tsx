import React, { FC, ReactNode } from "react";

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
      <div className="mx-auto text-center rounded-2xl auth-container shadow-mlg bg-secondary md:px-[100px] flex flex-col items-center py-[50px] w-full max-w-[729px] space-y-6 px-4">
        <div className="max-w-[506px] w-full mx-auto space-y-4">
          <h1 className="leading-10 text-[#253B4B] font-semibold text-2xl md:text-s3xl">
            {title}
          </h1>
          <p className="font-nunito text-[#353945] text-sm font-normal">
            {subtext}
          </p>
        </div>
        {children}
      </div>
    </>
  );
};

export default AuthContainer;
