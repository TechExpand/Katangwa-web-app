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
import Image from "next/image";

function Options() {
  const router = useRouter();
  const dispatch = useDispatch<any>();

  return (
    <>
      <AuthContainer
        title="Are you a service provider?"
        subtext="Join our list of professional service provider"
      >
        <div className="shadow-mlg rounded-xl max-w-[506px] px-4 md:px-7 w-full py-8">
          <div className="flex px-12 py-7 mb-6 justify-between">
            <div className="flex flex-col space-y-6 h-fit">
              {Array.from([1, 4, 7]).map((val: number) => (
                <Image
                  src={`/images/frame-${val}.png`}
                  alt="app-logo"
                  width={100}
                  height={105}
                />
              ))}
            </div>
            <div className="flex flex-col space-y-6 mt-[3.25rem] h-fit">
              {Array.from([2, 5, 8]).map((val: number) => (
                <Image
                  src={`/images/frame-${val}.png`}
                  alt="app-logo"
                  width={100}
                  height={105}
                />
              ))}
            </div>
            <div className="flex flex-col space-y-6 h-fit">
              {Array.from([3, 6, 9]).map((val: number) => (
                <Image
                  src={`/images/frame-${val}.png`}
                  alt="app-logo"
                  width={100}
                  height={105}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col space-y-5">
            <Button
              className="w-[28.25rem] h-12 px-5 py-2.5 capitalize"
              color="primary"
              disableElevation
              //   onClick={() => router.push("/")}
              variant="contained"
            >
              Yes, I'm a service provider
            </Button>

            <Button
              className="w-[28.25rem] h-12 px-5 py-2.5 capitalize"
              color="primary"
              disableElevation
              variant="outlined"
              onClick={() => router.push("/signup/verify-account")}
            >
              No, I'm here to buy and sell Items
            </Button>
          </div>
        </div>
      </AuthContainer>
    </>
  );
}

Options.getLayout = getAuthLayout;
export default Options;
