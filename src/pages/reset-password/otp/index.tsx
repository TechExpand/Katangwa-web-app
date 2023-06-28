import { InputEmail } from "@/assets/svg";
import { getLayout as getAuthLayout } from "@/components/layouts/AuthLayout";
import AuthContainer from "@/components/containers/AuthContainer";
import CustomInput from "@/components/input/CustomInput";
import { Button, Input, Typography } from "@mui/material";
import Link from "next/link";

function Otp() {
  return (
    <>
      <AuthContainer
        title="OTP VERIFICATION"
        subtext="Complete OTP verification to proceed, its important for account verification"
      >
        <div className="shadow-lg rounded-lg w-[516px] px-8 py-12 space-y-7">
          <p className="font-nunito text-[#353945] font-bold my-3">
            Please Enter OTP code sent to your registered email address
          </p>
          <CustomInput />
          <Button
            className="w-full h-full p-4 capitalize"
            color="primary"
            disableElevation
            variant="contained"
            onClick={() => {}}
          >
            Continue
          </Button>
        </div>
        <div className="w-full space-y-5 px-10 mt-8 text-center mx-auto">
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
