import type React from "react";
import type { ReactNode } from "react";

interface ButtonProps {
  title?: string;
  text?: string;
  type?: "button" | "submit";
  size?: string;
  icon?: ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  variant?:
    | "primary"
    | "secondary"
    | "danger"
    | "success"
    | "outline-secondary"
    | "outline-success"
    | "outline-danger"
    | "outline-primary"
    | "kzn"
    | "light border";
}

const Button = ({
  title,
  text,
  type = "button",
  size = "",
  icon,
  onClick,
  variant = "success",
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={`btn btn-${variant} ${size}`}
      title={title}
      onClick={onClick}
    >
      {icon}
      {text}
    </button>
  );
};

export default Button;
