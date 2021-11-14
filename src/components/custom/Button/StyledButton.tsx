import styled from "styled-components";

type btnProps = {
  c: string;
};

export const ButtonDiv = styled.div<btnProps>`
  img {
    width: 25px;
    margin-left: 15px;
  }
  :hover {
    ${({ c }) =>
      c === "1"
        ? "background-color: #000 !important; color: white !important;  !important;box-shadow: 0 10px 20px #00000050;"
        : `box-shadow: 0 10px 35px ${c}50;`}
  }
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 6px 0;
  /* font-size: 20px; */
  border-radius: 50px;
  padding: 8px;
  text-decoration: none;
  border-width: 1.68px;
  cursor: pointer;
  width: calc(100% - 20px);
  transition: 0.2s linear;
  svg {
    fill: white;
    margin-left: 15px;
  }
`;
