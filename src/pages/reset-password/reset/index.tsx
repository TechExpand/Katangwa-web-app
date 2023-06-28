import { Password } from "@/assets/svg";
import { getLayout as getAuthLayout } from "@/components/layouts/AuthLayout";
import AuthContainer from "@/components/containers/AuthContainer";
import CustomInput from "@/components/input/CustomInput";
import { Button, Input, Typography } from "@mui/material";
import Link from "next/link";

function Reset() {
  return (
    <>
      <AuthContainer
        title="PASSWORD RESET"
        subtext="No worries, we've got your back. Resetting your password is easy. "
      >
        <div className="shadow-lg rounded-lg max-w-[506px] w-full px-8 py-12 space-y-7">
          <p className="font-nunito text-[#353945] font-bold my-3">
            Please Enter New Password
          </p>
          <CustomInput
            icon={<Password />}
            type="password"
            placeholder="Password"
          />
          <CustomInput
            icon={<Password />}
            type="password"
            placeholder="Confirm Password"
          />
          <Button
            className="w-full h-14 p-4 capitalize"
            color="primary"
            disableElevation
            variant="contained"
            onClick={() => {}}
          >
            Reset Password
          </Button>
        </div>
        <div className="w-full space-y-5 px-10 mt-8 text-center mx-auto">
          <button className="text-[#737373] underline">Go back to Login</button>
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

Reset.getLayout = getAuthLayout;

export default Reset;
