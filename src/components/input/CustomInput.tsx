import { FC, ReactElement } from "react";

export interface InputProps {
  placeholder?: string;
}

const CustomInput: FC<InputProps> = ({ placeholder }) => {
  return (
    <div className="w-full h-full p-0 border-[#9DA5B2] border rounded-xl overflow-hidden font-bold capitalize flex">
      <div className="avatar w-16 p-3"></div>
      <input
        type="text"
        placeholder={placeholder}
        className="auth-input p-4 leading-7 text-lg font-normal w-full outline-none"
      />
    </div>
  );
};

export default CustomInput;
