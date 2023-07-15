import { Calendar, CategoryIcon, LocationBig } from "@/assets/svg";
import ProductCard from "@/components/cards/ProductCards";
import { getLayout as getPageLayout } from "@/components/layouts/CorePageLayout";
import Sidebar from "@/components/sidebar";
import RequestSidebar from "@/components/sidebar/RequestSidebar";
import {
  Button,
  FormControl,
  FormLabel,
  MenuItem,
  Select,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function SellerPage() {
  const [select, setSelect] = useState("none");

  const handleChange = (event: any) => {
    setSelect(event.target.value);
  };
  return (
    <div className="max-w-screen-2xl mx-auto py-20 px-4 md:px-10">
      <div className="flex space-x-8">
        <div className="w-[30%] space-y-4 tracking-wide text-[#253B4B] text-sm">
          <h3 className="font-normal uppercase">Seller Profile</h3>
          <RequestSidebar displayAbout={true} />
        </div>
        <main className=" bg-white w-full md:flex-1 space-y-10">
          <h1 className="text-4xl text-[#253B4B] font-semibold">Listings</h1>
          <div className="content gap-3 lg:gap-y-8 place-items-center grid grid-cols-2 lg:grid-cols-fluid mt-6">
            {Array.from([1, 1, 1, 1, 1, 1, 1, 1, 1]).map((item, index) => (
              <Link
                href={`/product-details/${index}`}
                key={index}
                className="w-fit"
              >
                <ProductCard key={index} />
              </Link>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

SellerPage.getLayout = getPageLayout;

export default SellerPage;
