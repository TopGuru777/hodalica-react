import React, { useEffect, useRef, useState } from "react";
import {
  CalendarAction,
  CalendarActionDiv,
  CalendarDiv,
  CalendarModalDiv,
  DatePickerGroupDiv,
  DateTab,
  DateTypeDiv,
  SelectButton,
  SelectButtonDiv,
} from "./StyledDatePickerGroup";

import { Calendar, DateRangePicker } from "react-date-range";

import calendarSvg from "assets/svg/calendar.svg";
import { useTranslation } from "react-i18next";

import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import Scrollbars from "react-custom-scrollbars";

const DatePickerGroup = ({ handleSearch }: any) => {
  const [state, setState] = useState<any>([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [selected, setSelected] = useState("today");
  const [datetype, setDateType] = useState("fixed");
  const [showCalendar, setShowCalendar] = useState(false);
  const dropMenuRef = useRef<any>(null);

  const { t } = useTranslation();

  const handleSelected = (key: string) => {
    if (key === "custom1") {
      setShowCalendar((prev) => !prev);
    } else {
      setSelected(key);
      const selectedDate: any = {
        key: key,
      };
      const todayDate = new Date();
      switch (key) {
        case "today":
          selectedDate.date = todayDate;
          break;
        case "yesterday":
          todayDate.setDate(new Date().getDate() - 1);
          break;
        case "7d":
          todayDate.setDate(new Date().getDate() - 7);
          break;
        case "30d":
          todayDate.setDate(new Date().getDate() - 30);
          break;
        case "3m":
          todayDate.setMonth(new Date().getMonth() - 3);
          break;
        case "6m":
          todayDate.setMonth(new Date().getMonth() - 6);
          break;
        case "1y":
          todayDate.setFullYear(new Date().getFullYear() - 1);
          break;
        default:
          break;
      }
      selectedDate.date = todayDate;
      handleSearch(selectedDate);
    }
  };

  const handleClickOutside = (e: any) => {
    if (dropMenuRef.current && dropMenuRef.current.contains(e.target)) {
      return;
    }
    setShowCalendar(false);
  };

  const handleDateChange = (date: any) => {
    setState([
      {
        startDate: date,
        endDate: date,
        key: "selection",
      },
    ]);
  };

  const dateRangeSearch = () => {
    const selectedDate = {
      key: datetype,
      date:
        datetype === "range"
          ? [state[0].startDate, state[0].endDate]
          : state[0].startDate,
    };
    setSelected("custom");
    handleSearch(selectedDate);
    setShowCalendar(false);
  };

  useEffect(() => {
    if (showCalendar) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showCalendar]);

  return (
    <DatePickerGroupDiv>
      <Scrollbars
        style={{
          width: "100%",
          height: "-webkit-fill-available",
          borderRadius: "15px",
        }}
        autoHide
      >
        <SelectButtonDiv>
          <SelectButton
            active={selected === "custom" ? true : false}
            onClick={() => handleSelected("custom1")}
          >
            {selected === "custom" &&
              datetype === "fixed" &&
              new Intl.DateTimeFormat("en-US", { dateStyle: "medium" }).format(
                state[0].startDate
              )}
            {selected === "custom" &&
              datetype === "range" &&
              Intl.DateTimeFormat("en-US", { dateStyle: "medium" }).format(
                state[0].startDate
              ) +
                " - " +
                Intl.DateTimeFormat("en-US", { dateStyle: "medium" }).format(
                  state[0].endDate
                )}
            {selected !== "custom" && (
              <>
                <img src={calendarSvg} alt="calendar" />
                {t("date_selectors.custom")}
              </>
            )}
          </SelectButton>
          <SelectButton
            active={selected === "today" ? true : false}
            onClick={() => handleSelected("today")}
          >
            {t("date_selectors.today")}
          </SelectButton>
          <SelectButton
            active={selected === "yesterday" ? true : false}
            onClick={() => handleSelected("yesterday")}
          >
            {t("date_selectors.yesterday")}
          </SelectButton>
          <SelectButton
            active={selected === "7d" ? true : false}
            onClick={() => handleSelected("7d")}
          >
            {t("date_selectors.7d")}
          </SelectButton>
          <SelectButton
            active={selected === "30d" ? true : false}
            onClick={() => handleSelected("30d")}
          >
            {t("date_selectors.30d")}
          </SelectButton>
          {/* <SelectButton
          active={selected === "3m" ? true : false}
          onClick={() => handleSelected("3m")}
        >
          {t("date_selectors.3m")}
        </SelectButton> */}

          <SelectButton
            active={selected === "1y" ? true : false}
            onClick={() => handleSelected("1y")}
          >
            {t("date_selectors.1y")}
          </SelectButton>
        </SelectButtonDiv>
      </Scrollbars>
      {showCalendar && (
        <CalendarModalDiv ref={dropMenuRef}>
          <DateTypeDiv>
            <DateTab
              onClick={() => setDateType("fixed")}
              active={datetype === "fixed" ? true : false}
            >
              {t("date_selectors.fixed")}
            </DateTab>
            <DateTab
              onClick={() => setDateType("range")}
              active={datetype === "range" ? true : false}
            >
              {t("date_selectors.range")}
            </DateTab>
          </DateTypeDiv>

          <CalendarDiv>
            {datetype === "range" ? (
              <DateRangePicker
                onChange={(item: any) => setState([item.selection])}
                ranges={state}
                months={2}
                direction="vertical"
                showPreview={false}
                // showMonthAndYearPickers={false}
              />
            ) : (
              <Calendar date={state[0].startDate} onChange={handleDateChange} />
            )}
          </CalendarDiv>

          <CalendarActionDiv>
            <CalendarAction
              style={{ color: "white" }}
              onClick={() => setShowCalendar(false)}
            >
              {t("date_selectors.cancel")}
            </CalendarAction>
            <CalendarAction onClick={dateRangeSearch}>
              {t("date_selectors.apply")}
            </CalendarAction>
          </CalendarActionDiv>
        </CalendarModalDiv>
      )}
    </DatePickerGroupDiv>
  );
};

export default DatePickerGroup;
