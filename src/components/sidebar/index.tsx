import { CategoryIcon } from "@/assets/svg";
import { FormControl } from "@mui/base";
import { Button, FormLabel, Select } from "@mui/material";
import { FC, ReactElement } from "react";

export interface InputProps {
  placeholder?: string;
  icon?: ReactElement;
  type?: string;
}

const Sidebar: FC = () => {
  return (
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
  );
};

export default Sidebar;
