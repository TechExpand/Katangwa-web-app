import { Button } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import { FC, ReactElement } from "react";

const AuthNavbar: FC = () => {
  const router = useRouter();

  return (
    <div className="flex justify-between items-center w-full h-max overflow-hidden py-7 px-7 max-w-screen-2xl bg-white mx-auto">
      <div className="image-container">
        <Image
          alt="app-logo"
          width={165}
          height={38}
          src="/images/logoKat.png"
        />
      </div>
      <div className="login-btn w-[150px] h-[44px]">
        <Button
          className="w-full h-12 p-4 bg-[#70A300] hover:bg-[#70A300] hover:opacity-75 rounded-lg font-bold capitalize"
          disableElevation
          color="primary"
          variant="contained"
          onClick={() =>
            router.pathname === "/" || router.pathname === "/login"
              ? router.push("/signup")
              : router.push("/login")
          }
        >
          {router.pathname === "/" || router.pathname === "/login"
            ? "Sign Up"
            : "Login"}
        </Button>
      </div>
    </div>
  );
};

export default AuthNavbar;
