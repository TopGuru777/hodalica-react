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

const DatePickerGroup = () => {
  const [state, setState] = useState<any>([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);
  const [selected, setSelected] = useState("today");
  const [datetype, setDateType] = useState("fixed");
  const [showCalendar, setShowCalendar] = useState(false);
  const dropMenuRef = useRef<any>(null);

  const { t } = useTranslation();

  const handleSelected = (key: string) => {
    setSelected(key);
    if (key === "custom") {
      setShowCalendar((prev) => !prev);
    }
  };

  const handleClickOutside = (e: any) => {
    if (dropMenuRef.current && dropMenuRef.current.contains(e.target)) {
      return;
    }
    setShowCalendar(false);
  };

  const handleDateChange = (date: any) => {
    setState({
      startDate: date,
      endDate: date,
      key: "selection",
    });
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
      <SelectButtonDiv>
        <SelectButton
          active={selected === "custom" ? true : false}
          onClick={() => handleSelected("custom")}
        >
          <img src={calendarSvg} alt="calendar" />
          {t("date_selectors.custom")}
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
        <SelectButton
          active={selected === "3m" ? true : false}
          onClick={() => handleSelected("3m")}
        >
          {t("date_selectors.3m")}
        </SelectButton>
        <SelectButton
          active={selected === "6m" ? true : false}
          onClick={() => handleSelected("6m")}
        >
          {t("date_selectors.6m")}
        </SelectButton>
        <SelectButton
          active={selected === "1y" ? true : false}
          onClick={() => handleSelected("1y")}
        >
          {t("date_selectors.1y")}
        </SelectButton>
      </SelectButtonDiv>
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
                showMonthAndYearPickers={false}
              />
            ) : (
              <Calendar date={state.startDate} onChange={handleDateChange} />
            )}
          </CalendarDiv>

          <CalendarActionDiv>
            <CalendarAction onClick={() => setShowCalendar(false)}>
              {t("date_selectors.cancel")}
            </CalendarAction>
            <CalendarAction>{t("date_selectors.apply")}</CalendarAction>
          </CalendarActionDiv>
        </CalendarModalDiv>
      )}
    </DatePickerGroupDiv>
  );
};

export default DatePickerGroup;
