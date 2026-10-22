import type { ReactNode } from "react";

interface InputProps {
  label?: string;
  name: string;
  icon?: ReactNode;
  hasInputGroup?: boolean;
  id?: string;
  type?: string;
  placeholder?: string;
  value: string;
  required?: boolean;
  readonly?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  label,
  name,
  id,
  type = "text",
  placeholder,
  value,
  required = false,
  readonly = false,
  onChange,
}: InputProps) => {
  return (
    <>
      <label className="form-label" htmlFor={id}>
        {label}
      </label>

      <input
        name={name}
        id={id}
        value={value}
        type={type}
        className="form-control"
        placeholder={placeholder}
        required={required}
        readOnly={readonly}
        onChange={onChange}
      ></input>
    </>
  );
};

export default Input;
