import styled from "styled-components";

export const DatePickerGroupDiv = styled.div`
  position: relative;
  width: 100%;
  height: 75px;
  border: 1px solid #ded4c5;
  border-radius: 15px;
  ::-webkit-scrollbar {
    width: 0px;
    height: 0px;
  }
`;

export const SelectButtonDiv = styled.div`
  height: -webkit-fill-available;
  /* overflow: hidden; */
  /* ::-webkit-scrollbar {
    width: 3px;
    height: 1px;
  } */
  /* ::-webkit-scrollbar-track-piece {
    background: transparent;
  } */
  /* ::-webkit-scrollbar-track {
    background: transparent;

    border-radius: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background: transparent;

    border-radius: 5px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: transparent;
  } */
  position: relative;
  width: 100%;
  height: 75px;
  /* overflow: auto; */
  display: flex;
  border-radius: 15px;
  & > *:not(:last-child) {
    border-right: 1px solid #ded4c5;
  }
  & > :last-child {
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
  }
  & > :first-child {
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
  white-space: nowrap;
  font-weight: 600;
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
  top: 100px;
  position: absolute;
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 10px 20px #00000050;
  .rdrDefinedRangesWrapper {
    display: none;
  }
  /* border: 2px solid #ded4c5; */
  max-width: 355px;
  width: 100%;
  z-index: 1;
`;

export const DateTypeDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 30px;
  background: rgb(39, 42, 44);
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  /* border: 2px solid gray; */
`;

type TabProps = {
  active: boolean;
};

export const DateTab = styled.div<TabProps>`
  padding: 12px 5px 15px 5px;
  font-size: 18px;
  ${({ active }) =>
    active
      ? "color: rgb(123, 128, 255);border-bottom: 3px solid rgb(123, 128, 255);"
      : "color: #888;border-bottom: none;"}
  cursor: pointer;
`;

export const CalendarDiv = styled.div`
  .rdrCalendarWrapper {
    background: rgb(30, 32, 35);
  }
  .rdrSelected,
  .rdrStartEdge,
  .rdrEndEdge,
  .rdrInRange {
    color: transparent !important;
    border: 2px solid rgb(123, 128, 255);
  }
  .rdrDayPassive .rdrDayNumber span {
    color: #555555 !important;
  }
  .rdrDayToday .rdrDayNumber span:after {
    background-color: rgb(123, 128, 255);
  }
  .rdrMonthPicker select option,
  .rdrYearPicker select option {
    background-color: rgb(30, 32, 35);
  }
  * {
    color: #ffffff !important;
  }
  .rdrDateDisplayWrapper {
    background: rgb(30, 32, 35);
  }
  .rdrDateDisplayItem {
    border-radius: 10px;
    background-color: rgb(30, 32, 35);
    border: 2px solid transparent;
  }
  .rdrDateDisplayItemActive {
    border: 2px solid rgb(123, 128, 255);
  }
  border-top: none;
  max-height: 400px;
  background-color: rgb(30, 32, 35);
  overflow: auto;
  ::-webkit-scrollbar {
    width: 3px;
    height: 3px;
  }
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px rgb(30, 32, 35);
    border-radius: 1px;
  }
  ::-webkit-scrollbar-thumb {
    background: #7c7c7c;
    border-radius: "6px";
  }
`;

export const CalendarActionDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  background-color: rgb(30, 32, 35);
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
  border-left: 1px solid rgb(48, 50, 53);
  border-right: 1px solid rgb(48, 50, 53);
  border-bottom: 1px solid rgb(48, 50, 53);
  padding: 15px 30px;
  & > *:not(:last-child) {
    margin-right: 30px;
  }
`;

export const CalendarAction = styled.div`
  font-size: 18px;
  cursor: pointer;
  color: rgb(123, 128, 255);
`;
