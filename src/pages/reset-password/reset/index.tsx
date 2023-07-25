import { ArrowRight, Password } from "@/assets/svg";
import { getLayout as getAuthLayout } from "@/components/layouts/AuthLayout";
import AuthContainer from "@/components/containers/AuthContainer";
import CustomInput from "@/components/input/CustomInput";
import { Button, Input, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";

function Reset() {
  const router = useRouter();
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
              Please Enter New Password
            </p>
            <CustomInput
              icon={<Password />}
              handleChange={() => {}}
              value=""
              type="password"
              placeholder="Password"
            />
            <CustomInput
              handleChange={() => {}}
              value=""
              icon={<Password />}
              type="password"
              placeholder="Confirm Password"
            />
            <Button
              className="w-full flex items-center justify-center space-x-2 h-12 md:h-14 p-4 capitalize"
              color="primary"
              disableElevation
              // disabled={formik.isSubmitting}
              variant="contained"
              type="submit"
            >
              <p className="font-semibold text-white">Reset Password</p>
              <ArrowRight />
            </Button>
          </form>
        </div>
        <div className="w-full px-6 md:px-10 mt-8 text-center mx-auto">
          <button
            className="text-[#737373] underline text-sm"
            onClick={() => router.push("/login")}
          >
            Return to Log in
          </button>
        </div>
      </AuthContainer>
    </>
  );
}

Reset.getLayout = getAuthLayout;

export default Reset;
