import CustomButton from "@/components/button/CustomButton";
import CustomInput from "@/components/input/CustomInput";
import AuthLayout from "@/components/layouts/AuthLayout";
import AuthNavbar from "@/components/navbar/AuthNavbar";
import { NextPage } from "next";

const ResetPassword: NextPage = () => {
  return (
    <>
      <AuthLayout
        title="PASSWORD RESET"
        subtext="It's time to create a new password. Choose a strong password that combines letters, numbers, and special characters for enhanced security"
      >
        <p className="font-nunito font-semibold my-3">
          Please Enter New Password
        </p>
        <CustomInput placeholder="Password" />
        <CustomInput placeholder="Confirm Password" />
        <CustomButton text="Reset Password" />
      </AuthLayout>
    </>
  );
};

export default ResetPassword;
