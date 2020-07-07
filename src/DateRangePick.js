import React from "react";
import {
  addDays,
  startOfMonth,
  endOfMonth,
  startOfYear,
  endOfYear,
} from "date-fns";
import "rsuite/dist/styles/rsuite-default.css";

import { DateRangePicker } from "rsuite";

export const DateRangePick = ({
  datePickerState,
  setShowRange,
  ranges,
  updateDatePickerState,
}) => {
  console.log(datePickerState);

  return (
    <div>
      <DateRangePicker
        cleanable={false}
        onOpen={() => {
          setShowRange(true);
        }}
        onClose={() => {
          setShowRange(false);
        }}
        ranges={ranges}
        onChange={(value) => {
          updateDatePickerState(value);
        }}
        value={datePickerState}
        placeholder="Select Date Range"
      />
    </div>
  );
};
