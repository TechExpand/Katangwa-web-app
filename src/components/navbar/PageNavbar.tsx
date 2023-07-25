import {
  ArrowDown,
  CategoryMob,
  MessageIcon,
  NotificationIcon,
  NotificationLight,
  PersonIcon,
  ProfileLight,
  SearchIcon,
} from "@/assets/svg";
import { setVisible } from "@/reduxcontainer/filterMenuSlice/filterMenuSlice";
import { Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC, ReactElement, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CustomSearch from "../input/CustomSearch";
import MobileMenu from "../mobileMenu/MobileMenu";

const PageNavbar: FC = () => {
  const [isActive, setIsActive] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const { showFilter } = useSelector((state: any) => state.filterMenuReducer);

  const menuToggle = () => {
    if (showFilter) {
      dispatch(setVisible(false));
    }
    setIsActive(!isActive);
  };

  return (
    <>
      <div className="w-full bg-white shadow-md z-10 fixed top-0 left-0 right-0">
        {/* top navbar  start*/}
        <div className="bg-[#09253B] text-white w-full h-16 flex items-center">
          <div className="hidden max-w-[90rem] w-full mx-auto px-6 md:px-[3.75rem] md:flex justify-between">
            <div className="left flex w-[48%] overflow-x-auto space-x-5 text-bold">
              <Link href={"/homepage/products"}>
                <p className="text-white font-semibold text-xs md:text-sm">
                  Electronics
                </p>
              </Link>
              <Link href={"/homepage/products"}>
                <p className="text-white font-semibold text-xs md:text-sm">
                  Computer
                </p>
              </Link>
              <Link href={"/homepage/products"}>
                <p className="text-white font-semibold text-xs md:text-sm">
                  Media
                </p>
              </Link>
              <Link href={"/homepage/products"}>
                <p className="text-white font-semibold text-xs md:text-sm">
                  Clothings
                </p>
              </Link>
              <Link href={"/homepage/services"}>
                <p className="text-white font-semibold text-xs md:text-sm">
                  Services
                </p>
              </Link>
              <Link href={"/homepage/products"} className="block">
                <p className="text-white font-semibold text-xs w-[6rem] md:text-sm">
                  Free items
                </p>
              </Link>
            </div>
            <div className="right">
              <Link href="#" className="text-xs md:text-sm font-semibold">
                View Request
              </Link>
            </div>
          </div>
          <div className="px-4 flex justify justify-between items-center w-full md:hidden">
            <div className="flex items-center space-x-2">
              <div onClick={menuToggle}>
                <CategoryMob />
              </div>

              <Image
                alt="app-logo"
                width={133.53}
                height={33.38}
                src="/images/logo-mobile.png"
              />
            </div>
            <div className="flex space-x-3">
              <div className="p-2.5 flex justify-between items-center rounded-full border w-fit border-white">
                <NotificationLight />
              </div>
              <div className="border-l flex justify-between items-center border-white p-2.5 pr-0">
                <ProfileLight />
              </div>
            </div>
          </div>
        </div>

        {/* top navbar stop */}

        {/* bottom navbar start */}
        <div className="w-full bg-white shadow-md z-10 top-0 left-0 right-0">
          <div className="md:flex hidden justify-between md:space-x-8 items-center w-full h-max overflow-hidden py-4 md:py-7 px-6 md:px-[3.75rem] max-w-[90rem] mx-auto">
            <Link href={"/homepage"} className="md:w-[231.578px] w-[165px]">
              <Image
                alt="app-logo"
                width={231.578}
                height={60.301}
                src="/images/logoKat.png"
              />
            </Link>

            <div className="search-section w-auto flex-grow flex items-center md:justify-between space-x-8">
              <div className="space-x-4 flex items-center flex-grow">
                <div className="flex items-center space-x-2">
                  <p className="text-base font-medium">Category</p>
                  <ArrowDown />
                </div>

                {/* display for other pages aside onboarding */}
                {router.pathname !== "/onboarding" && (
                  <div className="search w-auto max-w-lg flex-grow h-14">
                    <CustomSearch placeholder="Search for items" />
                  </div>
                )}
              </div>
            </div>
            <div className="login-contents space-x-4 flex items-center">
              <div className="w-9 h-9 rounded-full border-2 border-[#B1B5C3] flex justify-center items-center">
                <NotificationIcon />
              </div>

              <div className="w-9 h-9 rounded-full border-2 border-[#B1B5C3] flex justify-center items-center">
                <MessageIcon />
              </div>
              <div className="px-4 h-9 flex items-center justify-center border-l-2 border-[#B1B5C3]">
                <PersonIcon />
              </div>
            </div>
            <div className="login-btn w-[6rem] md:min-w-[111px]">
              <Button
                className="w-[6.8rem] h-11 md:h-12 p-4 rounded-lg text-sm md:text-base font-bold capitalize bg-[#70A300] hover:bg-[#70A300] hover:opacity-75"
                sx={{ textTransform: "capitalize" }}
                disableElevation
                color="primary"
                variant="contained"
              >
                Sell Now
              </Button>
            </div>
          </div>

          {/* mobile display for other pages aside onboarding*/}
          {router.pathname !== "/onboarding" && (
            <div className="h-[60px] md:hidden bg-[#F0F0F1] flex px-4 items-center">
              <input
                type="text"
                placeholder="Search for items"
                className="bg-transparent border-0 outline-0 flex-grow p-0"
              />
              <div className="icon p-2 w-[44px] h-[44px] flex justify-center items-center m-0 rounded-full bg-[#70A300] hover:bg-[#70A300] hover:cursor-pointer hover:opacity-75">
                <SearchIcon />
              </div>
            </div>
          )}
        </div>
        {/* bottom navbar stop */}

        {/* mobile menu */}
        <MobileMenu isActive={isActive} menuToggle={menuToggle} />
      </div>
    </>
  );
};

export default PageNavbar;
