import { GoogleIcon, InputEmail, Password, Profile } from "@/assets/svg";
import AuthContainer from "@/components/containers/AuthContainer";
import CustomInput from "@/components/input/CustomInput";
import { signup } from "@/reduxcontainer/authSlice/authSlice";
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

  const user = useSelector((state: any) => state.authReducer.user);

  interface UserSignupProps {
    fullname: string;
    email: string;
    password: string;
  }
  // @ts-ignore
  const logInUser: any = (
    { fullname, email, password }: UserSignupProps // @ts-ignore
  ) => dispatch(signup({ fullname, email, password }));

  const signUp = useMutation(logInUser, {
    onSuccess: ({ payload }) => {
      const { succeeded, data } = payload;
      formik.setSubmitting(false);

      if (succeeded && data) {
        formik.resetForm();

        router.push("/login");
      } else {
        console.log("Signup Failed");
      }
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const formik = useFormik({
    initialValues: { fullname: "", email: "", password: "" },
    onSubmit: ({ fullname, email, password }, { setSubmitting }) => {
      setSubmitting(true);
      // @ts-ignore
      signUp.mutate({ fullname, email, password });
    },
    validationSchema: Yup.object({
      fullname: Yup.string().required(),
      email: Yup.string().label("Email address").email().required(),
      password: Yup.string().label("Password").min(3).required(),
    }),
  });
  useEffect(() => {
    if (user) {
      router.push("/login");
    }
  }, []);

  const handleSignup = () => {
    router.push("/verify-account");
  };
  return (
    <>
      <AuthContainer
        title="Create a Katangwa account"
        subtext="Register now to get started on Katangwa"
      >
        <div className="shadow-mlg rounded-lg max-w-[506px] w-full px-5 md:px-8 pb-6 md:py-12">
          <form
            autoComplete="off"
            className=" space-y-7"
            onSubmit={(evt) => {
              evt.preventDefault();
              formik.handleSubmit();
            }}
          >
            <p className="font-nunito text-[#353945] tex-sm md:text-base font-bold my-3">
              Enter Your Details below
            </p>
            <CustomInput
              icon={<Profile />}
              placeholder="Full Name"
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
            <CustomInput
              icon={<Password />}
              type="password"
              value={formik.values.password}
              handleChange={formik.handleChange("password")}
              placeholder="Password"
            />
            <div className="flex space-x-4 text-left">
              <input
                type="checkbox"
                className="w-8 cursor-pointer -mt-3 bg-white"
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
              disabled={formik.isSubmitting}
              variant="contained"
              type="submit"
            >
              {formik.isSubmitting ? "Loading..." : "Continue"}
            </Button>
          </form>
        </div>
        <div className="w-full space-y-5 px-6 md:px-10 mt-8 text-center mx-auto">
          <div className="separator flex space-x-3 px-2 items-center">
            <span className="h-0.5 bg-[#9DA5B2] w-full"></span>
            <p>OR</p>
            <span className="h-0.5 bg-[#9DA5B2] w-full"></span>
          </div>

          <Button
            variant="outlined"
            disableElevation
            color="inherit"
            className="w-full h-12 md:h-14 space-x-2 p-4 outline-[#9DA5B2] font-bold capitalize"
          >
            <GoogleIcon />
            <p className="capitalize text-sm md:text-base">
              Signup with Google
            </p>
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
