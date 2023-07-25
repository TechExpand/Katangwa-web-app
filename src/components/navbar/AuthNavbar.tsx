import { Box, Button } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import { FC, ReactElement } from "react";

const AuthNavbar: FC = () => {
  const router = useRouter();

  return (
    <Box className=" w-full shadow-sm">
      <Box
        display="flex"
        justifyContent="space-between"
        marginX="auto"
        alignItems="center"
        maxWidth="90rem"
        mx="auto"
        className="px-6 h-20 md:h-[6.25rem] md:px-14"
      >
        <div className="img-container md:w-[15.12625rem] w-[10rem]">
          <Image
            alt="app-logo"
            width={242.02}
            height={60.5}
            src="/images/logoKat.png"
          />
        </div>
        <Button
          className="w-[8rem] md:w-[9.375rem] hover:opacity-80"
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
      </Box>
    </Box>
  );
};

export default AuthNavbar;
