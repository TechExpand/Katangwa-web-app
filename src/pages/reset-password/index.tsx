import { ArrowRight, InputEmail } from "@/assets/svg";
import { getLayout as getAuthLayout } from "@/components/layouts/AuthLayout";
import AuthContainer from "@/components/containers/AuthContainer";
import CustomInput from "@/components/input/CustomInput";
import { Button, Input, Typography } from "@mui/material";
import Link from "next/link";

function ResetPassword() {
  return (
    <>
      <AuthContainer
        title="PASSWORD RESET"
        subtext="No worries, we've got your back. Resetting your password is easy. "
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
              Enter Your Details below
            </p>
            <CustomInput
              icon={<InputEmail />}
              handleChange={() => {}}
              value={""}
              placeholder="Email Address"
            />
            <Button
              className="w-full flex items-center justify-center space-x-2 h-12 md:h-14 p-4 capitalize"
              color="primary"
              disableElevation
              // disabled={formik.isSubmitting}
              variant="contained"
              type="submit"
            >
              <p className="font-semibold text-white">Continue</p>
              <ArrowRight />
            </Button>
          </form>
        </div>
        <div className="w-full space-y-5 px-10 mt-8 text-center mx-auto">
          <button className="text-[#737373] text-sm underline">
            Resend OTP
          </button>
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

ResetPassword.getLayout = getAuthLayout;

export default ResetPassword;
