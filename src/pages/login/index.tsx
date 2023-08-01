import { GoogleIcon, InputEmail, Password } from "@/assets/svg";
import AuthContainer from "@/components/containers/AuthContainer";
import CustomInput from "@/components/input/CustomInput";
import { getLayout as getAuthLayout } from "@/components/layouts/AuthLayout";
import { login, setUser } from "@/reduxcontainer/authSlice/authSlice";
import {
  Alert,
  Button,
  CircularProgress,
  IconButton,
  Snackbar,
} from "@mui/material";
import { useFormik } from "formik";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import CloseIcon from "@mui/icons-material/Close";
import { useMutation } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import authService from "@/reduxcontainer/services/authService/authService";

function Login() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch<any>();
  const user = useSelector((state: any) => state.authReducer.user);

  const action = (
    <>
      <Button color="secondary" size="small" onClick={() => {}}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={() => setOpen(false)}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );

  interface UserLoginProps {
    email: string;
    password: string;
  }
  // @ts-ignore
  const logInUser: any = async (
    // @ts-ignore
    { email, password }: UserLoginProps // @ts-ignore
  ) => {
    // @ts-ignore
    await dispatch(login({ email, password })).unwrap();
    // await authService.login(email, password);
  };

  const signin = useMutation(logInUser, {
    onSuccess: async ({ payload }) => {
      const { status, data } = payload;
      formik.setSubmitting(false);

      if (status && data) {
        formik.resetForm();
        dispatch(setUser({ ...data }));
        // router.push("/homepage");
      } else {
        console.log("Login Failed");
      }
    },
    onError: (err) => {
      console.log("Error", err);
      setOpen(true);
      formik.setSubmitting(false);
    },
  });

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    onSubmit: ({ email, password }, { setSubmitting }) => {
      setSubmitting(true);
      // @ts-ignore
      signin.mutate({ email, password });
    },
    validationSchema: Yup.object({
      email: Yup.string().label("Email address").email().required(),
      password: Yup.string().label("Password").min(3).required(),
    }),
  });

  const handleLogin = () => {
    router.push("/onboarding");
  };
  return (
    <>
      <AuthContainer title="Log in" subtext="Enter your login details below">
        <div className="shadow-mlg rounded-xl max-w-[506px] px-4 md:px-7 w-full py-9">
          <form
            autoComplete="off"
            className="space-y-6"
            onSubmit={(evt) => {
              evt.preventDefault();
              formik.handleSubmit();
            }}
          >
            <CustomInput
              icon={<InputEmail />}
              type="email"
              value={formik.values.email}
              handleChange={formik.handleChange("email")}
              placeholder="Email Address"
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
              <div className="w-full justify-end mt-2 p-0 flex">
                <Link href={"/reset-password"} className="text-link text-sm">
                  Forgot Password?
                </Link>
              </div>
            </div>

            <Button
              className="w-full md:h-14 h-12 p-4 capitalize"
              type="submit"
              disabled={
                formik.isSubmitting ||
                !!formik.errors.password ||
                !!formik.errors.email
              }
              variant="contained"
            >
              <p className="font-semibold text-white">
                {" "}
                {formik.isSubmitting ? (
                  <CircularProgress color="inherit" />
                ) : (
                  "Login"
                )}
              </p>
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
            onClick={handleLogin}
            className="w-full h-12 md:h-14 space-x-2 p-4 outline-[#9DA5B2] font-bold normal-case"
          >
            <GoogleIcon />
            <p className="text-sm md:text-base font-semibold">
              Sign in With Google
            </p>
          </Button>
          <div className="w-fit mx-auto">
            <p className="text-base text-[#737373] font-medium">
              Don’t have an account?{" "}
              <Link href="/signup" className="text-link">
                Sign up
              </Link>
            </p>
          </div>
        </div>
        <Snackbar
          open={open}
          autoHideDuration={1500}
          onClose={() => setOpen(false)}
          action={action}
        >
          <Alert severity="error" variant="filled">
            {/* @ts-ignore */}
            {signin?.error?.message}
          </Alert>
        </Snackbar>
      </AuthContainer>
    </>
  );
}

Login.getLayout = getAuthLayout;
export default Login;
