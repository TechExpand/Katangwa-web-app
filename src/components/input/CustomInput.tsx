import { FC, ReactElement } from "react";

export interface InputProps {
  placeholder?: string;
  icon?: ReactElement;
  type?: string;
  value?: string;
  handleChange?: (email: any) => void;
}

const CustomInput: FC<InputProps> = ({
  placeholder,
  icon,
  type,
  value,
  handleChange,
}) => {
  return (
    <div className="w-full h-14 p-0 border-[#9DA5B2] border rounded-slg bg-[#F0F0F1] overflow-hidden font-bold capitalize flex">
      <div className="avatar flex justify-center bg-[#EBEBEB] items-center w-[60px] p-2.5">
        {icon}
      </div>
      <input className="hidden" type={type || "text"} name={type || "text"} />

      <input
        type={type || "text"}
        required={true}
        name={type || "text"}
        autoComplete="none"
        value={value}
        onChange={handleChange}
        aria-autocomplete="none"
        placeholder={placeholder}
        className="auth-input px-4 font-nunito md:p-4 text-base font-normal w-full outline-none"
      />
    </div>
  );
};

export default CustomInput;
