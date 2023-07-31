import { Location, Star } from "@/assets/svg";
import { FC, ReactElement } from "react";

export interface InputProps {
  text?: string;
  product?: any;
}

const ProductCard: FC<InputProps> = ({ product }) => {
  return (
    <div className="card w-full max-h-[18.8125rem] bg-white shadow rounded-lg">
      <div className="md:w-[286px] min-w-[180px] max-h-[200px] aspect-[1.43] overflow-hidden">
        <img
          alt="product-image"
          src={product?.image.displayImage || "/images/sneakers.png"}
          width="286px"
          object-fit="cover"
          height="200px"
        />
      </div>

      <div className="flex flex-col p-2 w-full h-[6.3125rem] justify-between">
        <div>
          <p className="text-[#737373] font-nunito flex space-x-1 items-center">
            <small>Men&apos;s shoe</small>
          </p>
          <div className="flex justify-between w-full">
            <p className="text-sm md:text-base font-medium capitalize">
              {product && product.name}
            </p>
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
          <h2 className="text-sm md:text-base font-semibold">
            &#8358;{product && Number(product.price)}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
