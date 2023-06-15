import CustomButton from "@/components/button/CustomButton";
import CustomInput from "@/components/input/CustomInput";
import AuthLayout from "@/components/layouts/AuthLayout";
import AuthNavbar from "@/components/navbar/AuthNavbar";
import { NextPage } from "next";

const SignUp: NextPage = () => {
  return (
    <>
      <AuthLayout
        title="Create a Katangwa account"
        subtext="Register an account now to get started on Katangwa"
      >
        <p className="font-nunito font-semibold my-3">
          Enter Your Details below
        </p>
        <CustomInput placeholder="Full Name" />
        <CustomInput placeholder="Email Address" />
        <CustomInput placeholder="Password" />
        <CustomButton text="Continue" />
      </AuthLayout>
    </>
  );
};

export default SignUp;
