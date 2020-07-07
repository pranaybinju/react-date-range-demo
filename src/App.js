import React, { useState, useEffect } from "react";
import {
  addDays,
  startOfMonth,
  endOfMonth,
  startOfYear,
  endOfYear,
} from "date-fns";
import "./App.css";

import { RangeSelector } from "./RangeSelector";
import { DateRangePick } from "./DateRangePick";
function App() {
  const [currentRange, setRange] = useState("This Year");
  const [datePickerState, setDatePickerState] = useState([
    {
      startDate: startOfYear(new Date()),
      endDate: endOfYear(new Date()),
      key: "selection",
    },
  ]);

  const rangeToDate = {
    Today: { startDate: new Date(), endDate: new Date() },
    "This Month": {
      startDate: startOfMonth(new Date()),
      endDate: endOfMonth(new Date()),
    },
    "Last Month": {
      startDate: startOfMonth(new Date()),
      endDate: endOfMonth(new Date()),
    },
    "This Year": {
      startDate: startOfYear(new Date()),
      endDate: endOfYear(new Date()),
    },
    "Last Year": {
      startDate: startOfYear(new Date()),
      endDate: endOfYear(new Date()),
    },
    "All Time": {
      startDate: new Date(2018, 1, 1),
      endDate: new Date(),
    },
  };

  const updateRange = (range) => {
    setRange(range);
    setDatePickerState([
      {
        startDate: rangeToDate[range].startDate,
        endDate: rangeToDate[range].endDate,
        key: "selection",
      },
    ]);
  };

  const updateDatePickerState = (item) => {
    setDatePickerState([item.selection]);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <RangeSelector
        updateRange={updateRange}
        currentRange={currentRange}
        ranges={[
          "Today",
          "This Month",
          "Last Month",
          "This Year",
          "Last Year",
          "All Time",
        ]}
      />

      <DateRangePick
        shownStartDate={rangeToDate[currentRange].startDate}
        shownEndDate={rangeToDate[currentRange].endDate}
        datePickerState={datePickerState}
        updateDatePickerState={updateDatePickerState}
      />
    </div>
  );
}

export default App;
