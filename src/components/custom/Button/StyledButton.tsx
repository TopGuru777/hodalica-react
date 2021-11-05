import styled from "styled-components";

type btnProps = {
  c: string;
};

export const ButtonDiv = styled.div<btnProps>`
  :hover {
    ${({ c }) =>
      c === "1"
        ? "background-color: #000 !important; color: white !important;  !important;box-shadow: 0 10px 20px #00000030;"
        : `box-shadow: 0 10px 35px ${c}30;`}
  }
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 6px 0;
  /* font-size: 20px; */
  font-weight: 500;
  border-radius: 50px;
  padding: 8px;
  text-decoration: none;
  border-width: 1.68px;
  cursor: pointer;
  width: calc(100% - 29px);
  transition: 0.2s linear;
  @media screen and (max-width: 1024px) {
    font-size: 16px;
    transition: 0.2s linear;
  }
  svg {
    fill: white;
    margin-left: 15px;
  }
`;
