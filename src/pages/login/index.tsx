import { GoogleIcon, InputEmail, Password } from "@/assets/svg";
import AuthContainer from "@/components/containers/AuthContainer";
import CustomInput from "@/components/input/CustomInput";
import { getLayout as getAuthLayout } from "@/components/layouts/AuthLayout";
import { Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";

function Login() {
  const router = useRouter();

  const handleLogin = () => {
    router.push("/onboarding");
  };
  return (
    <>
      <AuthContainer title="Log in" subtext="">
        <div className="shadow-mlg rounded-lg max-w-[506px] w-full px-5 md:px-8 pb-6 md:py-12 space-y-7">
          <p className="font-nunito text-[#353945] tex-sm md:text-base font-bold my-3">
            Enter Username and Enter Phone Number
          </p>
          <CustomInput
            icon={<InputEmail />}
            type="email"
            placeholder="Email Address"
          />
          <div>
            {" "}
            <CustomInput
              icon={<Password />}
              type="password"
              placeholder="Password"
            />
            <div className="w-full justify-end my-2 p-0 flex">
              <Link href={"/reset-password"} className="text-link text-sm">
                Forgot Password?
              </Link>
            </div>
          </div>

          <Button
            className="w-full md:h-14 h-12 p-4 capitalize"
            onClick={handleLogin}
            variant="contained"
          >
            Log in
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
            disableElevation
            onClick={handleLogin}
            className="w-full h-12 md:h-14 space-x-2 p-4 outline-[#9DA5B2] font-bold capitalize"
          >
            <GoogleIcon />
            <p className="capitalize">Signin with Google</p>
          </Button>
          <div className="w-fit mx-auto">
            <p className="md:text-lg text-[#737373] font-semibold">
              Don’t have an account?{" "}
              <Link href="/signup" className="text-link">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </AuthContainer>
    </>
  );
}

Login.getLayout = getAuthLayout;
export default Login;
