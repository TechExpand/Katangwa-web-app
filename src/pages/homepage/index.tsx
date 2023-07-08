import { CategoryIcon } from "@/assets/svg";
import ProductCard from "@/components/cards/ProductCards";
import { getLayout as getPageLayout } from "@/components/layouts/CorePageLayout";
import {
  Button,
  FormControl,
  FormLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { useState } from "react";

function Dashboard() {
  const [select, setSelect] = useState("none");

  const handleChange = (event: any) => {
    setSelect(event.target.value);
  };
  return (
    <div className="max-w-screen-2xl mx-auto flex">
      <div className="sidebar hidden md:block w-[32%] max-w-[22.625rem] min-h-full bg-[#F9F9F9] py-16 pl-12 pr-8 space-y-8">
        <div className="flex justify-between">
          <h4>Category</h4>
          <CategoryIcon />
        </div>

        <div className="space-y-5 text-sm">
          <FormControl className="w-full">
            <FormLabel className="text-sm mb-1">LABEL</FormLabel>

            <Select
              type="text"
              placeholder="Select Category"
              variant="outlined"
              className="w-full h-12"
            ></Select>
          </FormControl>
          <Select
            type="text"
            placeholder="Select Sub Category"
            variant="outlined"
            className="w-full h-12"
          ></Select>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <p className="text-sm font-normal">Condition</p>
            <Select
              type="text"
              placeholder="Select Sub Category"
              variant="outlined"
              className="w-full h-12"
            ></Select>
          </div>
          <div className="space-y-2">
            <p className="text-sm font-normal">Location</p>
            <Select
              type="text"
              placeholder="Select Sub Category"
              variant="outlined"
              className="w-full h-12"
            ></Select>
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-sm font-normal">Price Range</p>
          <div>
            <Select
              type="text"
              placeholder="Select Sub Category"
              variant="outlined"
              className="w-full h-12"
            ></Select>
          </div>
          <div>
            <Select
              type="text"
              placeholder="Select Sub Category"
              variant="outlined"
              className="w-full h-12"
            ></Select>
          </div>
        </div>
        <div className="flex space-x-3 justify-between">
          <Button
            color="primary"
            variant="outlined"
            className="w-32 h-12 capitalize"
          >
            Reset
          </Button>
          <Button
            color="primary"
            variant="contained"
            className="w-32 h-12 capitalize"
          >
            Filter
          </Button>
        </div>
      </div>

      <main className=" bg-white w-full md:flex-1 py-3 px-4 md:px-10">
        <div className="sort-section flex space-x-6 items-center bg-[#F9F9F9] px-4 md:px-10 rounded-md py-3">
          <h3 className="font-medium">Sort by:</h3>

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
              <ProductCard key={index} />
            )
          )}
        </div>
      </main>
    </div>
  );
}

Dashboard.getLayout = getPageLayout;

export default Dashboard;
