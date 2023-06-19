import { Calendar, NigeriaFlag } from "@/assets/svg";
import AuthContainer from "@/components/containers/AuthContainer";
import CustomInput from "@/components/input/CustomInput";
import { getLayout as getAuthLayout } from "@/components/layouts/AuthLayout";
import { Button, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";

function VerifyAccount() {
  const router = useRouter();

  const handleLogin = () => {
    router.push("/dashboard");
  };
  return (
    <>
      <AuthContainer
        title="Phone Number and Date of Birth "
        subtext="Register an account now to get started on Katangwa"
      >
        <div className="shadow-lg rounded-lg w-[506px] px-8 py-12 space-y-7">
          <p className="font-nunito text-[#353945] font-bold my-3">
            Please Enter More Details
          </p>
          <CustomInput icon={<NigeriaFlag />} placeholder="+234" />
          <CustomInput
            icon={<Calendar />}
            placeholder="Date of Birth (DD/MM/YY)"
          />

          <Button
            className="w-full h-full p-4 capitalize"
            color="primary"
            disableElevation
            variant="contained"
            onClick={() => {}}
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
        </div>
      </AuthContainer>
      <div className="space-y-5">
        <div className="text-center">
          <p>Why do we need this details?</p>
        </div>
        <div className="w-fit px-20 mr-0 ml-auto">
          <p className="text-2xl text-[#737373] font-semibold">
            Already have an account?{" "}
            <Link href="/signup" className="text-link">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

VerifyAccount.getLayout = getAuthLayout;
export default VerifyAccount;
