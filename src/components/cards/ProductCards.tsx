import { Button } from "@mui/material";
import Image from "next/image";
import { FC, ReactElement } from "react";

export interface InputProps {
  text?: string;
}

const ProductCard: FC = () => {
  return (
    <div className="card max-w-[17.875rem] h-[18.8125rem] bg-white shadow rounded-lg">
      <Image
        alt="product-image"
        src={"/images/sneakers.png"}
        width={286}
        height={200}
      />
    </div>
  );
};

export default ProductCard;
