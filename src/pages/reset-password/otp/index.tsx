import { InputEmail } from "@/assets/svg";
import { getLayout as getAuthLayout } from "@/components/layouts/AuthLayout";
import AuthContainer from "@/components/containers/AuthContainer";
import CustomInput from "@/components/input/CustomInput";
import { Button, Input, Typography } from "@mui/material";
import Link from "next/link";
import { useState } from "react";

function Otp() {
  const [disabled, setDisabled] = useState(true);
  return (
    <>
      <AuthContainer
        title="OTP VERIFICATION"
        subtext="Complete OTP verification to proceed, its important for account verification"
      >
        <div className="shadow-mlg rounded-lg max-w-[506px] w-full px-5 md:px-8 pb-6 md:py-12 space-y-7">
          <p className="font-nunito text-[#353945] tex-sm md:text-base font-bold my-3">
            Please Enter OTP code sent to your registered email address
          </p>
          <div className="w-full h-full p-0 border-[#9DA5B2] border rounded-xl overflow-hidden font-bold capitalize flex">
            <input
              type={"number"}
              required={true}
              className="auth-input px-4 py-2 md:p-4 leading-7 text-lg font-normal w-full outline-none"
            />
          </div>
          <Button
            className="w-full md:h-14 h-12 p-4 capitalize bg-[#B1B5C3]"
            color={disabled ? "secondary" : "primary"}
            disableElevation
            variant="contained"
            onClick={() => {}}
          >
            Continue
          </Button>
        </div>
        <div className="w-full space-y-5 px-5 md:px-10 mt-8 text-center mx-auto">
          <button className="text-[#737373] underline">Resend OTP</button>
          <Typography className="text-[#253B4B] text-sm">
            By signing up, you agree to our{" "}
            <Link className="text-link" href="#">
              Terms & Privacy Policy.
            </Link>
          </Typography>
        </div>
      </AuthContainer>
    </>
  );
}

Otp.getLayout = getAuthLayout;

export default Otp;
