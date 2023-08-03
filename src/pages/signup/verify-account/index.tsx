import { Calendar, NigeriaFlag } from "@/assets/svg";
import AuthContainer from "@/components/containers/AuthContainer";
import CustomInput from "@/components/input/CustomInput";
import { getLayout as getAuthLayout } from "@/components/layouts/AuthLayout";
import { setUser, signup } from "@/reduxcontainer/authSlice/authSlice";
import { Button, Typography } from "@mui/material";
import { useFormik } from "formik";
import Link from "next/link";
import * as Yup from "yup";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useMutation } from "react-query";

function VerifyAccount() {
  const router = useRouter();
  const dispatch = useDispatch<any>();

  const user = useSelector((state: any) => state.authReducer.signupInfo);

  interface UserSignupProps {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phone: string | number;
    dob: string;
  }
  // @ts-ignore
  const signupUser = (
    // @ts-ignore
    { firstName, lastName, dob, phone, email, password }: UserSignupProps // @ts-ignore
  ) => dispatch(signup({ firstName, lastName, dob, phone, email, password })); // @ts-ignore

  const signUp = useMutation(signupUser, {
    onSuccess: ({ payload }: any) => {
      const { status, data } = payload;
      formik.setSubmitting(false);

      if (status && data) {
        formik.resetForm();

        router.push("/onboarding");
      } else {
        console.log("Signup Failed");
      }
    },
    onError: (err: any) => {
      console.log(err);
    },
  });
  const formik = useFormik({
    initialValues: { phoneNumber: "", dob: "" },
    onSubmit: ({ phoneNumber, dob }, { setSubmitting }) => {
      signUp.mutate({
        firstName: user.firstName,
        lastName: user.lastName,
        phone: "+234" + phoneNumber,
        dob: dob,
        password: user.password,
        email: user.email,
      });
    },
    validationSchema: Yup.object({
      phoneNumber: Yup.string().required(),
      dob: Yup.string().label("date of birth").required(),
    }),
  });

  useEffect(() => {
    !user && router.push("/signup");
  }, [user]);
  return (
    <>
      <AuthContainer
        title="Phone Number and Date of Birth "
        subtext="Register an account now to get started on Katangwa"
      >
        <div className="shadow-mlg rounded-lg max-w-[506px] w-full px-5 md:px-8 pb-6 py-12 space-y-7">
          <form
            autoComplete="off"
            className=" space-y-6"
            onSubmit={(evt) => {
              evt.preventDefault();
              formik.handleSubmit();
            }}
          >
            <p className="font-nunito text-[#353945] tex-sm md:text-base font-bold my-3">
              Please Enter More Details
            </p>
            <CustomInput
              icon={<NigeriaFlag />}
              type="number"
              value={formik.values.phoneNumber}
              handleChange={formik.handleChange("phoneNumber")}
              placeholder="+234"
            />
            <CustomInput
              icon={<Calendar />}
              type="date"
              value={formik.values.dob}
              handleChange={formik.handleChange("dob")}
              placeholder="Date of Birth (DD/MM/YY)"
            />

            <Button
              className="w-full md:h-14 h-12 p-4 capitalize"
              color="primary"
              disableElevation
              variant="contained"
              type="submit"
            >
              {formik.isSubmitting ? "Loading..." : "Continue"}
            </Button>
          </form>
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
    </>
  );
}

VerifyAccount.getLayout = getAuthLayout;
export default VerifyAccount;
