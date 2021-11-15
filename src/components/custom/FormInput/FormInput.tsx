import React from "react";
import { Input, InputDiv, TextArea } from "./StyledInput";

type InputProps = {
  name: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: any;
  required?: boolean;
  error?: string;
};

type textareaProps = {
  name: string;
  placeholder: string;
  value: string;
  onChange: any;
  required?: boolean;
};

const FormInput = ({
  name,
  type,
  placeholder,
  value,
  onChange,
  error,
}: InputProps) => {
  return (
    <InputDiv>
      <span>{error ? error : ""}</span>
      <Input
        type={type}
        onChange={onChange}
        name={name}
        value={value}
        placeholder={placeholder}
      />
    </InputDiv>
  );
};

export default FormInput;

export const FormText = ({
  name,
  placeholder,
  value,
  onChange,
  required,
}: textareaProps) => {
  return (
    <InputDiv>
      <TextArea
        onChange={onChange}
        name={name}
        placeholder={placeholder}
        value={value}
      />
    </InputDiv>
  );
};
