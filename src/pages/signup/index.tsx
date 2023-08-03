import {
  ArrowRight,
  GoogleIcon,
  InputEmail,
  Password,
  Profile,
} from "@/assets/svg";
import AuthContainer from "@/components/containers/AuthContainer";
import CustomInput from "@/components/input/CustomInput";
import { setUser, signup } from "@/reduxcontainer/authSlice/authSlice";
import { getLayout as getAuthLayout } from "@/components/layouts/AuthLayout";
import { Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import * as Yup from "yup";
import { useEffect } from "react";
import { useMutation } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";

function SignUp() {
  const router = useRouter();
  const dispatch = useDispatch<any>();

  const formik = useFormik({
    initialValues: { fullname: "", email: "", password: "" },
    onSubmit: ({ fullname, email, password }, { setSubmitting }) => {
      dispatch(
        setUser({
          firstName: fullname.split(" ")[0],
          lastName: fullname.split(" ")[1],
          email: email,
          password: password,
        })
      );

      router.push("/signup/options");
    },
    validationSchema: Yup.object({
      fullname: Yup.string().required(),
      email: Yup.string().label("Email address").email().required(),
      password: Yup.string().label("Password").min(3).required(),
    }),
  });

  const handleSignup = () => {
    router.push("/verify-account");
  };
  return (
    <>
      <AuthContainer
        title="Create a Katangwa account"
        subtext="Register now to get started on Katangwa"
      >
        <div className="shadow-mlg rounded-xl max-w-[506px] px-4 md:px-7 w-full py-8">
          <form
            autoComplete="off"
            className=" space-y-6"
            onSubmit={(evt) => {
              evt.preventDefault();
              formik.handleSubmit();
            }}
          >
            <p className="font-nunito text-[#353945] tex-sm md:text-sm font-bold">
              Enter Your Details Below
            </p>
            <CustomInput
              icon={<Profile />}
              placeholder="First Name Last Name"
              value={formik.values.fullname}
              handleChange={formik.handleChange("fullname")}
              type="text"
            />
            <CustomInput
              icon={<InputEmail />}
              type="email"
              placeholder="Email Address"
              value={formik.values.email}
              handleChange={formik.handleChange("email")}
            />
            <div>
              <input
                className="hidden"
                type="password"
                name="fakeusernameremembered"
              />
              <CustomInput
                icon={<Password />}
                type="password"
                value={formik.values.password}
                handleChange={formik.handleChange("password")}
                placeholder="Password"
              />
              <small className="w-full justify-start text-[B1B5C3] text-xs font-light mt-2 p-0 flex">
                Must be atleast 8 characters
              </small>
            </div>
            <div className="flex space-x-4 text-left">
              <input
                type="checkbox"
                className="w-5 -mt-2 cursor-pointer bg-white checked:bg-[#70A300]"
                name="check"
                id="check"
              />
              <p className="text-[#737373] text-xs font-normal">
                By creating an account, you agree to our terms of service and
                privacy policy
              </p>
            </div>
            <Button
              className="w-full flex items-center justify-center space-x-2 h-12 md:h-14 p-4 capitalize"
              color="primary"
              disableElevation
              disabled={formik.isSubmitting}
              variant="contained"
              type="submit"
            >
              <p className="font-semibold text-white">
                {formik.isSubmitting ? "Loading..." : "Continue"}
              </p>
              <ArrowRight />
            </Button>
          </form>
        </div>
        <div className="w-full space-y-6 px-6 md:px-10 mt-8 text-center mx-auto">
          <div className="separator flex space-x-3 px-2 items-center">
            <span className="h-0.5 bg-[#9DA5B2] w-full"></span>
            <p className="font-normal text-sm">OR</p>
            <span className="h-0.5 bg-[#9DA5B2] w-full"></span>
          </div>
          <Button
            variant="outlined"
            disableElevation
            color="inherit"
            onClick={handleSignup}
            className="w-full h-12 md:h-14 normal-case space-x-2 p-4 outline-[#9DA5B2] font-bold"
          >
            <GoogleIcon />
            <p className="text-sm md:text-base font-semibold">
              Sign in with Google
            </p>
          </Button>
          <div className="w-fit mx-auto">
            <p className="text-base text-[#737373] font-medium">
              Already have an account?{" "}
              <Link href="/signup" className="text-link">
                Log In
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
