import { GoogleIcon, InputEmail, Password, Profile } from "@/assets/svg";
import AuthContainer from "@/components/containers/AuthContainer";
import CustomInput from "@/components/input/CustomInput";
import { getLayout as getAuthLayout } from "@/components/layouts/AuthLayout";
import { Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";

function SignUp() {
  const router = useRouter();
  const handleSignup = () => {
    router.push("/verify-account");
  };
  return (
    <>
      <AuthContainer
        title="Create a Katangwa account"
        subtext="Register now to get started on Katangwa"
      >
        <div className="shadow-mlg rounded-lg max-w-[506px] w-full px-5 md:px-8 pb-6 md:py-12 space-y-7">
          <p className="font-nunito text-[#353945] tex-sm md:text-base font-bold my-3">
            Enter Your Details below
          </p>
          <CustomInput icon={<Profile />} placeholder="Full Name" />
          <CustomInput
            icon={<InputEmail />}
            type="email"
            placeholder="Email Address"
          />
          <CustomInput
            icon={<Password />}
            type="password"
            placeholder="Password"
          />
          <div className="flex space-x-4 text-left">
            <input
              type="checkbox"
              className="w-8 cursor-pointer -mt-3"
              name="check"
              id="check"
            />
            <p className="text-[#737373]">
              By creating an account, you agree to our terms of service and
              privacy policy
            </p>
          </div>
          <Button
            className="w-full h-12 md:h-14 p-4 capitalize"
            color="primary"
            disableElevation
            variant="contained"
            onClick={handleSignup}
          >
            Contine
          </Button>
        </div>
        <div className="w-full space-y-5 px-10 mt-8 text-center mx-auto">
          <div className="separator flex space-x-3 px-2 items-center">
            <span className="h-0.5 bg-[#9DA5B2] w-full"></span>
            <p>OR</p>
            <span className="h-0.5 bg-[#9DA5B2] w-full"></span>
          </div>

          <Button
            variant="outlined"
            className="w-full h-12 md:h-14 space-x-2 p-4 outline-[#9DA5B2]  font-bold capitalize"
          >
            <GoogleIcon />
            <p>Sign in with Google</p>
          </Button>
          <div className="w-fit mx-auto">
            <p className="text-lg md:text-xl text-[#737373] font-semibold">
              Have an account already?{" "}
              <Link href="/login" className="text-link">
                Log in
              </Link>
            </p>
          </div>
        </div>
      </AuthContainer>
    </>
  );
}

SignUp.getLayout = getAuthLayout;
export default SignUp;
