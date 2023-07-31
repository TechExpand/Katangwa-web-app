import { Button, FormControl, Slider, TextField } from "@mui/material";
import React, { FC, ReactNode } from "react";
import { useSelector } from "react-redux";
import CustomSelect from "../input/CustomSelect";

function valuetext(value: number) {
  return `${value}°C`;
}
type AuthContainerProps = {
  sliderValue?: number[];
  handleChange?: (
    event: Event,
    newValue: number | number[],
    activeThumb: number
  ) => void;
};
const FilterContents: FC<AuthContainerProps> = ({
  sliderValue,
  handleChange,
}) => {
  const categories = useSelector((state: any) => state.categoryReducer);

  return (
    <>
      <div className="space-y-1 pt-5">
        <p className="text-xs text-secondary">LABEL</p>
        <div className="space-y-4 text-sm">
          <FormControl className="w-full">
            <CustomSelect
              placeholder="Select Category"
              options={!categories.isLoading && categories.data}
            />
          </FormControl>

          <FormControl className="w-full">
            <CustomSelect placeholder="Select Sub Category" />
          </FormControl>
        </div>
      </div>
      <div className="space-y-4">
        <div className="space-y-2">
          <p className="text-xs font-normal">Condition</p>
          <FormControl className="w-full">
            <CustomSelect placeholder="Select Condition" />
          </FormControl>
        </div>
        <div className="space-y-2">
          <p className="text-xs font-normal">Location</p>
          <FormControl className="w-full">
            <CustomSelect placeholder="Select Location" />
          </FormControl>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-xs mb-6 font-normal">Price Range</p>
        <div className="px-3">
          <Slider
            getAriaLabel={() => "Minimum distance shift"}
            value={sliderValue}
            onChange={handleChange}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            disableSwap
          />
        </div>
        <div>
          <TextField
            variant="outlined"
            className="w-full h-10"
            placeholder="Min"
            type="number"
            InputProps={{
              style: {
                fontSize: 12,
                height: 40,
                borderRadius: 8,
              },
            }}
            hiddenLabel
          />
        </div>
        <div>
          <TextField
            variant="outlined"
            className="w-full h-10"
            placeholder="Max"
            type="number"
            InputProps={{
              style: {
                fontSize: 12,
                height: 40,
                borderRadius: 8,
              },
            }}
            hiddenLabel
          />
        </div>
      </div>
      <div className="flex space-x-3 justify-between">
        <Button
          color="primary"
          variant="outlined"
          className="w-full max-w-[10.9375rem] h-12 capitalize"
        >
          Reset
        </Button>
        <Button
          color="primary"
          variant="contained"
          className="w-full max-w-[10.9375rem] h-12 capitalize"
        >
          Filter
        </Button>
      </div>
    </>
  );
};

export default FilterContents;
