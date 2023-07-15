import { CategoryIcon } from "@/assets/svg";
import ProductCard from "@/components/cards/ProductCards";
import { getLayout as getPageLayout } from "@/components/layouts/CorePageLayout";
import Sidebar from "@/components/sidebar";
import {
  Button,
  FormControl,
  FormLabel,
  MenuItem,
  Select,
} from "@mui/material";
import Link from "next/link";
import { useState } from "react";

function Products() {
  const [select, setSelect] = useState("none");

  const handleChange = (event: any) => {
    setSelect(event.target.value);
  };
  return (
    <div className="max-w-screen-2xl mx-auto flex">
      <Sidebar />

      <main className=" bg-white w-full md:flex-1 py-3 px-4 md:px-10">
        <div className="flex mt-4 px-4 py-3 items-center justify-between">
          <h3 className="font-medium text-black">
            Showing Search Result for:{" "}
          </h3>
          <div className="flex items-center space-x-2 bg-[#F9F9F9] border-[#C4C4C4] p-2 rounded-full">
            <Button className="px-8 py-2 text-sm font-normal text-[#253B4B] rounded-full shadow-md">
              Listed Items
            </Button>
            <Button className="px-8 py-2 text-sm font-normal text-[#253B4B]">
              View Requests
            </Button>
          </div>
        </div>
        <div className="sort-section flex space-x-6 items-center bg-[#F9F9F9] px-4 md:px-10 rounded-md py-3">
          <h3 className="font-medium text-black">Sort by:</h3>

          <Select
            value={select}
            type="text"
            variant="outlined"
            className="w-36 h-12"
            onChange={(event) => handleChange(event)}
          >
            <MenuItem
              value="none"
              disabled
              className="text-[#828282] font-semibold"
            >
              Popular
            </MenuItem>
            <MenuItem value="1">Option 1</MenuItem>
            <MenuItem value="2">Option 2</MenuItem>
            <MenuItem value="3">Option 3</MenuItem>
          </Select>
        </div>

        <div className="content gap-3 lg:gap-y-8 place-items-center grid grid-cols-2 lg:grid-cols-fluid mt-6">
          {Array.from([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]).map(
            (item, index) => (
              <Link href={`/product-details/${index}`} key={index}>
                <ProductCard key={index} />
              </Link>
            )
          )}
        </div>
      </main>
    </div>
  );
}

Products.getLayout = getPageLayout;

export default Products;
