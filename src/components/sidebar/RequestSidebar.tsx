import { BulletArrow, CategoryIcon, Star } from "@/assets/svg";
import { FormControl } from "@mui/base";
import { Button, FormLabel, Select } from "@mui/material";
import { useRouter } from "next/router";
import { FC, ReactElement, useState } from "react";
import ProductDetails from "../productDetails";

export interface SidebarProps {
  displayAbout?: boolean;
}

const RequestSidebar: FC<SidebarProps> = ({ displayAbout = false }) => {
  const [profileDisplay, setProfileDisplay] = useState(false);

  const router = useRouter();
  return (
    <div className="space-y-10">
      <div className="call-to-action w-full rounded-lg border-[2.5px] py-7 space-y-2 px-4 md:px-6">
        <div
          className="flex space-x-7 mb-6 cursor-pointer"
          aria-disabled={displayAbout}
          onClick={() => router.push("/seller/0")}
        >
          <div className="avatar bg-red rounded-full w-20 h-20"></div>
          <div className="intro space-y-2">
            <h2 className="text-xl text-[#253B4B]">John Doe</h2>
            <div className="space-y-1">
              <p className="text-xs">Last Seen 10 Minutes ago</p>
              <p className="text-xs">Joined 2 Weeks ago</p>
              <div className="flex space-x-3">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-8 px-2 md:px-6">
          <div className="flex flex-col space-y-2">
            <Button
              className="h-14"
              variant="contained"
              disableElevation
              color="primary"
            >
              Call Seller
            </Button>

            <Button
              className="h-14 border md:border-[1.5px]"
              variant="outlined"
              color="primary"
            >
              Chat
            </Button>
          </div>
          <div className="space-y-2 flex flex-col">
            <div className="separator flex space-x-3 px-2 items-center">
              <span className="h-0.5 bg-[#9DA5B2] w-full"></span>
              <p>OR</p>
              <span className="h-0.5 bg-[#9DA5B2] w-full"></span>
            </div>
            <Button className="h-8">Request a callback</Button>

            {!displayAbout && (
              <Button className="h-8">View Seller Profile</Button>
            )}
          </div>
        </div>
      </div>
      {displayAbout ? (
        <div className="call-to-action w-full rounded-lg border-[2.5px] py-7 space-y-2 px-6">
          <h2 className="text-xl text-[#253B4B]">About</h2>
          <p className="text-sm text-[#202022]">
            Lorem ipsum dolor sit amet consectetur. Aliquet consectetur nunc
            diam commodo. Dictum nisl velit porttitor sed. Lobortis odio
            molestie imperdiet feugiat non et. Elementum eget vulputate
            convallis aliquet quis lobortis. Tincidunt pharetra eget integer
            purus ut facilisis. Nisi venenatis metus egestas netus. Tincidunt at
            fames nullam leo enim purus ultrices odio. Vulputate aliquam
            suspendisse morbi purus quis nulla sed.
          </p>
        </div>
      ) : (
        <div className="call-to-action w-full rounded-lg border-[2.5px] py-9 space-y-5 px-6">
          <h2 className="text-xl text-[#253B4B] text-center">Safety Tips</h2>
          <ul className="space-y-4">
            <li className="inline-flex items-center space-x-1.5">
              <BulletArrow />
              <p> Remember, don&apos;t send any pre-payments</p>
            </li>

            <li className="inline-flex items-center space-x-1.5">
              <BulletArrow />
              <p>Make the seller at a safe and secured locations</p>
            </li>
            <li className="inline-flex items-center space-x-1.5">
              <BulletArrow />
              <p>Inspect the goods to make sure they meet your needs</p>
            </li>
            <li className="inline-flex items-center space-x-1.5">
              <BulletArrow />
              <p>Report Suspicious Activity</p>
            </li>
            <li className="inline-flex items-center space-x-1.5">
              <BulletArrow />
              <p>Meet the seller at a safe and secured locations</p>
            </li>
            <li className="inline-flex items-center space-x-1.5">
              <BulletArrow />
              <p>Inspect the goods to make sure they meet your needs</p>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default RequestSidebar;
