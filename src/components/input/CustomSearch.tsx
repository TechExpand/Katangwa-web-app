import { SearchIcon } from "@/assets/svg";
import { FC, ReactElement } from "react";

export interface InputProps {
  placeholder?: string;
}

const CustomSearch: FC<InputProps> = ({ placeholder }) => {
  return (
    <div className="w-full h-full p-0 border-[#9DA5B2] border rounded-full overflow-hidden font-bold capitalize flex">
      <input
        type="search"
        placeholder={placeholder}
        className="auth-input p-4 leading-7 text-lg bg-transparent font-normal w-full outline-none"
      />
      <div className="icon w-20 flex justify-center items-center  bg-[#70A300] hover:bg-[#70A300] hover:cursor-pointer hover:opacity-75">
        <SearchIcon />
      </div>
    </div>
  );
};

export default CustomSearch;
