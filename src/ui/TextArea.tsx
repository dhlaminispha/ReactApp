import React from "react";

interface TextAreaProps {
  label: string;
  value: string;
  id?: string;
  name: string;
  placeholder: string;
  rows?: number;
  cols?: number;
  required?: boolean;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea = ({
  label,
  value,
  name,
  id,
  placeholder,
  rows,
  cols,
  required = false,
  onChange,
}: TextAreaProps) => {
  return (
    <>
      <label className="form-label" htmlFor={id}>
        {label}
      </label>
      <textarea
        value={value}
        name={name}
        cols={cols}
        rows={rows}
        onChange={onChange}
        required={required}
        className="form-control"
        placeholder={placeholder}
      ></textarea>
    </>
  );
};

export default TextArea;
