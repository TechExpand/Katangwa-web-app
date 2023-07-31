import { Location, Star } from "@/assets/svg";
import { Button } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import { FC, ReactElement } from "react";

export interface InputProps {
  text?: string;
  service?: any;
}

const ServiceCard: FC<InputProps> = ({ service }) => {
  const router = useRouter();
  return (
    <div className="card max-w-[17.875rem] max-h-[18.8125rem] bg-white shadow rounded-lg">
      <div className="md:w-[286px] min-w-[180px] max-h-[200px] aspect-[1.43] overflow-hidden">
        <img
          alt="product-image"
          src={service?.image.displayImage || "/images/sneakers.png"}
          width="286px"
          object-fit="cover"
          height="200px"
        />
      </div>

      <div className="flex flex-col px-2 pt-6 pb-3 w-full h-[6.3125rem] justify-between">
        <div>
          <div className="flex justify-between w-full">
            <p className="text-sm md:text-base">{service && service.name}</p>
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
          <h2 className="text-sm md:text-base">
            &#8358;{service && service.price} &#x2215; hr
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
