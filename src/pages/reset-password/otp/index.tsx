import { ArrowRight, InputEmail } from "@/assets/svg";
import { getLayout as getAuthLayout } from "@/components/layouts/AuthLayout";
import AuthContainer from "@/components/containers/AuthContainer";
import CustomInput from "@/components/input/CustomInput";
import { Button, Input, Typography } from "@mui/material";
import Link from "next/link";
import { useState } from "react";

function Otp() {
  const [disabled, setDisabled] = useState(false);
  return (
    <>
      <AuthContainer
        title="OTP VERIFICATION"
        subtext="Complete OTP verification to proceed, its important for account verification"
      >
        <div className="shadow-mlg rounded-xl max-w-[506px] px-4 md:px-7 w-full py-8">
          <form
            autoComplete="off"
            className=" space-y-6"
            onSubmit={(evt) => {
              evt.preventDefault();
            }}
          >
            <p className="font-nunito text-[#353945] tex-sm md:text-sm font-bold">
              Please Enter OTP code sent to your registered email address
            </p>
            <div className="w-full h-[55px] md:h-[60px] p-0 border-[#9DA5B2] border rounded-xl overflow-hidden font-bold capitalize flex">
              <input
                type={"number"}
                required={true}
                className="auth-input px-4 font-nunito md:p-4 text-base font-normal w-full outline-none"
              />
            </div>
            <Button
              className="w-full flex items-center justify-center space-x-2 h-12 md:h-14 p-4 capitalize"
              color={disabled ? "info" : "primary"}
              disableElevation
              variant="contained"
              onClick={() => {}}
            >
              <p className="font-semibold text-white">Continue</p>
              <ArrowRight />
            </Button>
          </form>
        </div>
        <div className="w-full space-y-6 px-5 md:px-10 mt-8 text-center mx-auto">
          <button className="text-[#737373] text-sm underline">
            Resend OTP
          </button>
          <p className="text-sm text-[#737373] font-medium">
            By signing up, you agree to our{" "}
            <Link className="text-link" href="#">
              Terms &#xFE60; Privacy Policy.
            </Link>
          </p>
        </div>
      </AuthContainer>
    </>
  );
}

Otp.getLayout = getAuthLayout;

export default Otp;
