import {
  ArrowDown,
  MessageIcon,
  NotificationIcon,
  PersonIcon,
} from "@/assets/svg";
import { Button } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import { FC, ReactElement } from "react";
import CustomSearch from "../input/CustomSearch";

const PageNavbar: FC = () => {
  const router = useRouter();
  return (
    <div className="w-full bg-white shadow-md z-10 fixed top-0 left-0 right-0">
      <div className="flex space-x-12 items-center w-full h-max overflow-hidden py-7 px-16 max-w-screen-2xl mx-auto">
        <div className="image-container">
          <Image
            alt="app-logo"
            width={165}
            height={38}
            src="/images/Katangwa.png"
          />
        </div>

        <div className="search-section w-auto flex-grow flex items-center space-x-8">
          <div className="space-x-4 w-auto flex items-center flex-grow">
            <div className="flex items-center space-x-2">
              <p className="text-lg font-medium">Category</p>
              <ArrowDown />
            </div>
            <div className="search w-auto max-w-xl flex-grow h-[55px]">
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
        <div className="login-btn w-[111px] h-[44px]">
          <Button
            className="w-full h-full p-4 bg-gradient-to-r rounded-lg font-bold capitalize from-[#126969] to-[#4BBB8B]"
            disableElevation
            color="primary"
            variant="contained"
          >
            Sell Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PageNavbar;