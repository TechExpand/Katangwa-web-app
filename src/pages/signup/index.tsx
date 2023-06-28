import { GoogleIcon, InputEmail, NigeriaFlag, Password } from "@/assets/svg";
import AuthContainer from "@/components/containers/AuthContainer";
import CustomInput from "@/components/input/CustomInput";
import { getLayout as getAuthLayout } from "@/components/layouts/AuthLayout";
import { Button, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";

function SignUp() {
  const router = useRouter();
  const handleSignup = () => {
    router.push("/login");
  };
  return (
    <>
      <AuthContainer
        title="Create a Katangwa account"
        subtext="Register an account now to get started on Katangwa"
      >
        <div className="shadow-lg rounded-lg w-[516px] px-8 py-12 space-y-7">
          <p className="font-nunito font-semibold my-3">
            Enter Your Details below
          </p>
          <CustomInput icon={<NigeriaFlag />} placeholder="Full Name" />
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
          <Button
            className="w-full h-full p-4 capitalize"
            color="primary"
            disableElevation
            variant="contained"
            onClick={handleSignup}
          >
            Contine
          </Button>
        </div>
        <div className="w-full space-y-5 px-10 mt-8 text-center mx-auto">
          <Typography className="text-[#253B4B] text-sm">
            By signing up, you agree to our{" "}
            <Link className="text-link" href="#">
              Terms & Privacy Policy.
            </Link>
          </Typography>

          <div className="separator flex space-x-3 px-2 items-center">
            <span className="h-0.5 bg-[#9DA5B2] w-full"></span>
            <p>OR</p>
            <span className="h-0.5 bg-[#9DA5B2] w-full"></span>
          </div>

          <Button
            variant="outlined"
            className="w-full h-full space-x-2 p-4 outline-[#9DA5B2]  font-bold capitalize"
          >
            <GoogleIcon />
            <p>Sign in with Google</p>
          </Button>
        </div>
      </AuthContainer>
    </>
  );
}

SignUp.getLayout = getAuthLayout;
export default SignUp;
