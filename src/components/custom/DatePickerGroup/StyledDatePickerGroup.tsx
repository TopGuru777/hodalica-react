import styled from "styled-components";

export const DatePickerGroupDiv = styled.div`
  position: relative;
`;

export const SelectButtonDiv = styled.div`
  overflow: auto;
  display: flex;
  border: 1px solid #ded4c5;
  border-radius: 15px;
  & > *:not(:last-child) {
    border-right: 1px solid #ded4c5;
  }
  & > *:last-child {
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
  }
  & > *:first-child {
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
  }
`;

type SelectButtonProps = {
  active: boolean;
};

export const SelectButton = styled.div<SelectButtonProps>`
  img {
    margin-right: 9px;
    width: 29px;
    height: 29px;
  }
  justify-content: center;
  width: 100%;
  font-size: 18px;
  display: flex;
  align-items: center;
  padding: 23px 35px;
  transition: 0.2s linear;
  background-color: ${({ active }) => (active ? " #F3EBDE" : "transparent")};
  cursor: pointer;
  :hover {
    background-color: ${({ active }) => !active && " #F3EBDE80"};
    transition: 0.2s linear;
  }
`;

export const CalendarModalDiv = styled.div`
  top: 85px;
  position: absolute;
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 10px 20px #00000050;
  .rdrDefinedRangesWrapper {
    display: none;
  }
  border: 2px solid #ded4c5;
  max-width: 355px;
  width: 100%;
`;

export const DateTypeDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 30px;
  background: #f3ebde;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  border-bottom: 2px solid #ded4c5;
`;

type TabProps = {
  active: boolean;
};

export const DateTab = styled.div<TabProps>`
  padding: 8px 5px;
  font-size: 18px;
  ${({ active }) =>
    active
      ? "color: rgb(57, 59, 136);border-bottom: 3px solid rgb(57, 59, 136);"
      : "color: #000;border-bottom: none;"}
  cursor: pointer;
`;

export const CalendarDiv = styled.div`
  border-top: none;
  max-height: 400px;

  overflow: auto;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 3px;
    height: 3px;
  }
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px lightgrey;
    border-radius: 1px;
  }
  ::-webkit-scrollbar-thumb {
    background: darkgray;
    border-radius: "6px";
  }
`;

export const CalendarActionDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0 30px 10px 30px;
  & > *:not(:last-child) {
    margin-right: 30px;
  }
`;

export const CalendarAction = styled.div`
  font-size: 18px;
  cursor: pointer;
  color: rgb(57, 59, 136);
`;
