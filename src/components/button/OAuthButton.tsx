import { Button } from "@mui/material";
import { FC, ReactElement } from "react";

export interface InputProps {
  text?: string;
}

const OAuthButton: FC<InputProps> = ({ text = "Log in" }) => {
  return (
    <Button
      variant="outlined"
      disableElevation
      className="w-full h-full p-4  font-bold capitalize"
    >
      Sign in with Google
    </Button>
  );
};

export default OAuthButton;
