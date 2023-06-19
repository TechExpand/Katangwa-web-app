import { Button } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import { FC, ReactElement } from "react";

const AuthNavbar: FC = () => {
  const router = useRouter();
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
        <Button
          className="w-full h-full p-4 bg-gradient-to-r rounded-lg font-bold capitalize from-[#126969] to-[#4BBB8B]"
          disableElevation
          color="primary"
          variant="contained"
          onClick={() => router.push("/login")}
        >
          Log in
        </Button>
      </div>
    </div>
  );
};

export default AuthNavbar;
