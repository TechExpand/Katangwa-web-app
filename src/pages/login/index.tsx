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
    router.push("/dashboard");
  };
  return (
    <>
      <AuthContainer
        title="Log in"
        subtext="Register an account now to get started on Katangwa"
      >
        <div className="shadow-lg rounded-lg w-[506px] px-8 py-12 space-y-7">
          <p className="font-nunito text-[#353945] font-bold my-3">
            Enter Username and Enter Phone Number
          </p>
          <CustomInput icon={<InputEmail />} placeholder="Email Address" />
          <CustomInput icon={<Password />} placeholder="Password" />

          <Button
            className="w-full h-full p-4 capitalize"
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
            className="w-full h-full space-x-2 p-4 outline-[#9DA5B2]  font-bold capitalize"
          >
            <GoogleIcon />
            <p>Sign in with Google</p>
          </Button>
        </div>
      </AuthContainer>
      <div className="w-fit px-20 mr-0 ml-auto">
        <p className="text-2xl text-[#737373] font-semibold">
          Don’t have an account?{" "}
          <Link href="/signup" className="text-link">
            Sign up
          </Link>
        </p>
      </div>
    </>
  );
}

Login.getLayout = getAuthLayout;
export default Login;
