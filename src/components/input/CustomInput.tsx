import { FC, ReactElement } from "react";

export interface InputProps {
  placeholder?: string;
  icon?: ReactElement;
  type?: string;
}

const CustomInput: FC<InputProps> = ({ placeholder, icon, type }) => {
  return (
    <div className="w-full h-full p-0 border-[#9DA5B2] border rounded-xl overflow-hidden font-bold capitalize flex">
      <div className="avatar w-16 flex justify-center items-center p-3">
        {icon}
      </div>
      <input
        type={type || "text"}
        required={true}
        placeholder={placeholder}
        className="auth-input py-2 md:p-4 leading-7 text-lg font-normal w-full outline-none"
      />
    </div>
  );
};

export default CustomInput;
