import { Button } from "@mui/material";
import { FC, ReactElement } from "react";

export interface InputProps {
  text?: string;
}

const CustomButton: FC<InputProps> = ({ text = "Log in" }) => {
  return (
    <Button
      variant="contained"
      disableElevation
      className="w-full h-full p-4 bg-gradient-to-r font-semibold capitalize from-[#126969] to-[#4BBB8B]"
    >
      {text}
    </Button>
  );
};

export default CustomButton;
