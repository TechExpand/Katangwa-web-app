import CustomButton from "@/components/button/CustomButton";
import CustomInput from "@/components/input/CustomInput";
import AuthLayout from "@/components/layouts/AuthLayout";
import AuthNavbar from "@/components/navbar/AuthNavbar";
import { NextPage } from "next";

const Login: NextPage = () => {
  return (
    <>
      <AuthLayout
        title="Log in"
        subtext="Register an account now to get started on Katangwa"
      >
        <p className="font-nunito font-semibold my-3">
          Enter Username and Enter Phone Number
        </p>
        <CustomInput placeholder="Email Address" />
        <CustomInput placeholder="Password" />
        <CustomButton />
      </AuthLayout>
    </>
  );
};

export default Login;
