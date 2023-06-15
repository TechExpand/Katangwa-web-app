import Image from "next/image";
import { FC, ReactElement } from "react";
import CustomButton from "../button/CustomButton";

const AuthNavbar: FC = () => {
  return (
    <div className="flex justify-between items-center w-full h-max overflow-hidden py-7 px-7 max-w-screen-xl mx-auto">
      <div className="image-container">
        <Image
          alt="app-logo"
          width={165}
          height={38}
          src="/images/Katangwa.png"
        />
      </div>
      <div className="login-btn w-[150px] h-[44px]">
        <CustomButton />
      </div>
    </div>
  );
};

export default AuthNavbar;
