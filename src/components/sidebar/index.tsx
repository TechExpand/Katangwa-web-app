import { CategoryIcon } from "@/assets/svg";
import { getCategories } from "@/reduxcontainer/productSlice/productSlice";
import React, { FC, ReactElement, useState } from "react";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import FilterContents from "../filters";

export interface InputProps {
  placeholder?: string;
  icon?: ReactElement;
  type?: string;
}

const minDistance = 10;

const Sidebar: FC = () => {
  const [sliderValue, setSliderValue] = React.useState<number[]>([20, 37]);

  const dispatch = useDispatch<any>();
  const data = useSelector((state: any) => state.categoryReducer);

  const { data: categoryData } = useQuery(
    ["category"],
    () => {
      return dispatch(getCategories());
    },
    {
      keepPreviousData: true,
      onSuccess: async (res) => {
        console.log(res);
      },
      onError: (err) => {
        console.log(err);
      },
    }
  );

  const handleChange = (
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
  return (
    <>
      <div className="sidebar hidden md:block w-[32%] max-w-[20.625rem] min-h-full bg-[#F9F9F9] py-12 pl-12 pr-6 space-y-8">
        <div className="flex items-center space-x-2">
          <CategoryIcon />
          <p className="font-normal text-base text-black">Category</p>
        </div>

        <FilterContents handleChange={handleChange} sliderValue={sliderValue} />
      </div>
    </>
  );
};

export default Sidebar;
