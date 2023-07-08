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
      <div className="mx-auto text-center rounded-2xl auth-container shadow-mlg bg-white md:px-20 flex flex-col items-center py-8 w-full max-w-[729px]">
        <div className="pb-5 max-w-[506px] px-2 w-full mx-auto space-y-4">
          <h1 className="leading-10 font-semibold text-2xl md:text-3xl">
            {title}
          </h1>
          <p className="font-nunito text-[#353945]">{subtext}</p>
        </div>
        {children}
      </div>
    </>
  );
};

export default AuthContainer;
