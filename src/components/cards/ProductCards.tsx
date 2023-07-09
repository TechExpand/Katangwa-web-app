import { Location, Star } from "@/assets/svg";
import { Button } from "@mui/material";
import Image from "next/image";
import { FC, ReactElement } from "react";

export interface InputProps {
  text?: string;
}

const ProductCard: FC = () => {
  return (
    <div className="card max-w-[17.875rem] max-h-[18.8125rem] bg-white shadow rounded-lg">
      <Image
        alt="product-image"
        src={"/images/sneakers.png"}
        width={286}
        height={200}
      />

      <div className="flex flex-col p-2 w-full h-[6.3125rem] justify-between">
        <div>
          <p className="text-[#737373] font-nunito flex space-x-1 items-center">
            <small>Men&apos;s shoe</small>
          </p>
          <div className="flex justify-between w-full">
            <p className="text-sm md:text-base">Nike Revolution</p>
            <div className="flex items-center space-x-0.5">
              <Star />
              <p className="text-sm md:text-base">2</p>
            </div>
          </div>
        </div>
        <div></div>
        <div className="flex justify-between w-full">
          <p className="text-[#737373] text-xs md:text-sm flex space-x-1 items-center">
            <Location />
            <small>Lagos Island</small>
          </p>
          <h2 className="text-sm md:text-base">&#8358;20,000</h2>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
