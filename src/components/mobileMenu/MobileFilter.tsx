import { BackArrow } from "@/assets/svg";
import { setVisible } from "@/reduxcontainer/filterMenuSlice/filterMenuSlice";
import { Button } from "@mui/material";
import Link from "next/link";
import { FC, ReactElement, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import FilterContents from "../filters";

export interface InputProps {
  isActive?: boolean;
  menuToggle?: () => void;
}

const categories = [
  "Electronics",
  "Computer",
  "Media",
  "Clothings",
  "Services",
  "Free Items",
];

const minDistance = 10;
const MobileFilter: FC<InputProps> = ({ isActive = false, menuToggle }) => {
  const [sliderValue, setSliderValue] = useState<number[]>([0, 100]);
  const dispatch = useDispatch();
  const { showFilter } = useSelector((state: any) => state.filterMenuReducer);

  const handleSlideChange = (
    event: Event,
    newValue: number | number[],
    activeThumb: number
  ) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (newValue[1] - newValue[0] < minDistance) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], 100 - minDistance);
        setSliderValue([clamped, clamped + minDistance]);
      } else {
        const clamped = Math.max(newValue[1], minDistance);
        setSliderValue([clamped - minDistance, clamped]);
      }
    } else {
      setSliderValue(newValue as number[]);
    }
  };
  const handleToggleFilter = () => {
    dispatch(setVisible(!showFilter));
  };
  return (
    <div
      data-testid={"kat-mobile-menu"}
      className={`z-10 lg:hidden bg-white w-full h-[full] fixed bottom-0 top-16 left-0 transform ${
        !showFilter && "translate-x-full"
      } lg:relative lg:translate-x-0 transition duration-300 ease-in-out`}
    >
      <div className="py-7 px-4 flex justify-between w-full">
        <p>Filter</p>
        <div className="w-fit" onClick={handleToggleFilter}>
          <CloseIcon className="text-[#1E1E1E[" />
        </div>
      </div>
      <div className="px-4 space-y-8">
        <FilterContents
          sliderValue={sliderValue}
          handleChange={handleSlideChange}
        />
      </div>
    </div>
  );
};

export default MobileFilter;
