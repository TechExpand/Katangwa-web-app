import { Dropdown } from "@/assets/svg";
import { MenuItem, Select } from "@mui/material";
import { FC, ReactElement, useState } from "react";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
  PaperProps: {
    sx: {
      "& .MuiMenuItem-root": {
        fontSize: 12,
      },
      "& .MuiSelect-outlined": {
        height: 40,
      },
    },
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
export interface InputProps {
  placeholder?: string;
  selected?: any;
  options?: string[] | number[];
  handleChange?: (e: any) => void;
}

const CustomSelect: FC<InputProps> = ({
  placeholder,
  selected,
  handleChange = () => {},
}) => {
  const [selectVal, setSelectVal] = useState("");
  return (
    <Select
      value={selected || ""}
      onChange={(e) => setSelectVal(e.target.value)}
      displayEmpty
      IconComponent={(props) => (
        <div className="w-fit pr-3 cursor-pointer">
          <Dropdown />
        </div>
      )}
      className="w-full flex h-10 rounded-lg items-center text-xs"
      MenuProps={MenuProps}
      renderValue={(selected: any) => {
        if (selected?.length > 0) {
          return selected;
        }
        return <p className="text-secondary">{placeholder}</p>;
      }}
      inputProps={{ "aria-label": "Without label" }}
    >
      <MenuItem disabled value="">
        <em>{placeholder}</em>
      </MenuItem>
      <MenuItem value={"10"}>Ten</MenuItem>
      <MenuItem value={"20"}>Twenty</MenuItem>
      <MenuItem value={"30"}>Thirty</MenuItem>
    </Select>
  );
};

export default CustomSelect;
