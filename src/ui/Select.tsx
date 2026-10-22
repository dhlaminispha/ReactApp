import type React from "react";

interface SelectOption {
  value: string;
  text: string;
}

interface SelectProps {
  label?: string;
  name: string;
  defaultOption?: string;
  id?: string;
  value: string;
  options: SelectOption[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select = ({
  label,
  name,
  id,
  value,
  options,
  defaultOption = "Select...",
  onChange,
}: SelectProps) => {
  return (
    <>
      <label className="form-label" htmlFor={id}>
        {label}
      </label>

      <select
        onChange={onChange}
        value={value}
        name={name}
        id={id}
        className="form-select"
      >
        <option value={""}>{defaultOption}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
    </>
  );
};

export default Select;
