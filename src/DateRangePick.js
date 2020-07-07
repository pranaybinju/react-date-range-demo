import React from "react";
import { DateRange } from "react-date-range";
import {
  addDays,
  startOfMonth,
  endOfMonth,
  startOfYear,
  endOfYear,
} from "date-fns";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

export const DateRangePick = ({
  shownStartDate,
  shownEndDate,
  datePickerState,
  updateDatePickerState,
}) => {
  console.log(shownStartDate);
  console.log(shownEndDate);
  return (
    <>
      <DateRange
        shownDate={shownStartDate}
        showMonthAndYearPickers={false}
        onChange={(item) => updateDatePickerState(item)}
        showSelectionPreview={true}
        months={2}
        ranges={datePickerState}
        direction="horizontal"
      />
      {/* <DateRange
        shownEndDate={shownEndDate}
        onChange={(item) => updateDatePickerState(item)}
        showSelectionPreview={true}
        months={1}
        ranges={datePickerState}
        direction="horizontal"
      /> */}
    </>
  );
};
