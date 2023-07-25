import { BackArrow } from "@/assets/svg";
import { setVisible } from "@/reduxcontainer/filterMenuSlice/filterMenuSlice";
import { Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC, ReactElement, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export interface InputProps {
  isActive?: boolean;
  menuToggle: () => void;
}

const categories = [
  "Electronics",
  "Computer",
  "Media",
  "Clothings",
  "Services",
  "Free Items",
];

const MobileMenu: FC<InputProps> = ({ isActive = false, menuToggle }) => {
  const { pathname } = useRouter();

  useEffect(() => {
    if (isActive) {
      menuToggle();
    }
  }, [pathname]);

  return (
    <div
      data-testid={"kat-mobile-menu"}
      className={`z-10 lg:hidden bg-white w-full h-full fixed inset-y-0 left-0 transform ${
        !isActive && "-translate-x-full"
      } lg:relative lg:translate-x-0 transition duration-300 ease-in-out`}
    >
      <div
        onClick={menuToggle}
        className=" py-7 px-4 border-b border-[#C4C4C4]"
      >
        <BackArrow />
      </div>
      <div className="px-4">
        <div className="py-6">
          <div className="flex justify-between">
            <p className="text-[#253B4B] font-medium">Categories</p>
            <p className="text-link font-medium">View All</p>
          </div>
          <div className="space-y-3 py-7">
            {categories.map((category, index) => (
              <Link href="/homepage/products" key={index}>
                <p className="font-medium text-[#5F5F5F] leading-8">
                  {category}
                </p>
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center space-y-5 border-t py-5 border-[#C4C4C4]">
          <Button
            className="w-full max-w-[249px] h-12 px-5 py-2.5 capitalize"
            color="primary"
            disableElevation
            variant="contained"
          >
            View Requests
          </Button>

          <Button
            className="w-full max-w-[249px] h-12 px-5 py-2.5 capitalize"
            color="primary"
            disableElevation
            variant="outlined"
            onClick={() => {}}
          >
            Request an Item/Service
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
