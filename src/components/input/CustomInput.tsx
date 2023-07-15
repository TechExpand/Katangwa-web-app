import { FC, ReactElement } from "react";

export interface InputProps {
  placeholder?: string;
  icon?: ReactElement;
  type?: string;
  value: string;
  handleChange: (email: any) => void;
}

const CustomInput: FC<InputProps> = ({
  placeholder,
  icon,
  type,
  value,
  handleChange,
}) => {
  return (
    <div className="w-full h-full p-0 border-[#9DA5B2] border rounded-xl overflow-hidden font-bold capitalize flex">
      <div className="avatar w-16 flex justify-center items-center p-3">
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
        className="auth-input p-2 md:p-4 leading-7 text-lg font-normal w-full bg-[#9da5b241] outline-none"
      />
    </div>
  );
};

export default CustomInput;
