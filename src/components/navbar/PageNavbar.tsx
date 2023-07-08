import {
  ArrowDown,
  MessageIcon,
  NotificationIcon,
  PersonIcon,
} from "@/assets/svg";
import { Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC, ReactElement } from "react";
import CustomSearch from "../input/CustomSearch";

const PageNavbar: FC = () => {
  const router = useRouter();
  return (
    <>
      <div className="w-full bg-white shadow-md z-10 fixed top-0 left-0 right-0">
        <div className="bg-[#09253B] text-white w-full h-16 flex items-center">
          <div className="max-w-screen-2xl w-full mx-auto px-16 flex justify-between">
            <div className="left flex space-x-5 text-bold">
              <p className="text-white font-semibold">Electronics</p>
              <p className="text-white font-semibold">Computer</p>
              <p className="text-white font-semibold">Media</p>
              <p className="text-white font-semibold">Clothings</p>
              <p className="text-white font-semibold">Services</p>
              <p className="text-white font-semibold">Free items</p>
            </div>
            <div className="right">
              <Link href="#" className="font-semibold">
                View Request
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full bg-white shadow-md z-10 top-0 left-0 right-0">
          <div className="flex space-x-12 items-center w-full h-max overflow-hidden py-7 px-16 max-w-screen-2xl mx-auto">
            <div className="image-container">
              <Image
                alt="app-logo"
                width={165}
                height={38}
                src="/images/logoKat.png"
              />
            </div>

            <div className="search-section w-auto flex-grow flex items-center space-x-8">
              <div className="space-x-4 w-auto flex items-center flex-grow">
                <div className="flex items-center space-x-2">
                  <p className="text-lg font-medium">Category</p>
                  <ArrowDown />
                </div>
                <div className="search w-auto max-w-xl flex-grow h-14">
                  <CustomSearch placeholder="Search for items" />
                </div>
              </div>
              <div className="login-contents space-x-4 flex items-center">
                <div className="w-12 h-12 rounded-full border-2 border-[#B1B5C3] flex justify-center items-center">
                  <NotificationIcon />
                </div>

                <div className="w-12 h-12 rounded-full border-2 border-[#B1B5C3] flex justify-center items-center">
                  <MessageIcon />
                </div>
                <div className="px-4 h-12 flex items-center justify-center border-l-2 border-[#B1B5C3]">
                  <PersonIcon />
                </div>
              </div>
            </div>
            <div className="login-btn min-w-[111px] ">
              <Button
                className="w-full h-12 p-4 rounded-lg font-bold capitalize bg-[#70A300] hover:bg-[#70A300] hover:opacity-75"
                sx={{ textTransform: "capitalize" }}
                disableElevation
                color="primary"
                variant="contained"
              >
                Sell Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageNavbar;
