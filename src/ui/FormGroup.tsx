import type { ReactNode } from "react";

interface FormGroupProps {
  children: ReactNode;
  formstyle: string;
}

const FormGroup = ({ formstyle, children }: FormGroupProps) => {
  return <div className={`${formstyle}`}>{children}</div>;
};

export default FormGroup;
