import React from "react";
import { ButtonDiv } from "./StyledButton";

type ButtonProps = {
  value: any;
  onClick: any;
  color: string;
  borderLine: string;
  font: string;
};

const Button = ({ value, onClick, color, borderLine, font }: ButtonProps) => {
  return (
    <ButtonDiv
      onClick={onClick}
      style={{
        border: `1.68px solid ${borderLine}`,
        background: color,
        color: font,
      }}
      c={borderLine === color ? borderLine : "1"}
    >
      {value}
    </ButtonDiv>
  );
};

export default Button;
