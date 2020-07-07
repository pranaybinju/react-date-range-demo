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
  const [showRange, setShowRange] = useState(false);
  const [datePickerState, setDatePickerState] = useState([
    startOfYear(new Date()),
    endOfYear(new Date()),
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
      rangeToDate[range].startDate,
      rangeToDate[range].endDate,
    ]);
  };

  const updateDatePickerState = (item) => {
    setDatePickerState(item);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <DateRangePick
        ranges={[
          { label: "Today", value: [new Date(), new Date()] },
          {
            label: "This Month",
            value: [startOfMonth(new Date()), endOfMonth(new Date())],
          },

          {
            label: "This Year",
            value: [startOfYear(new Date()), endOfYear(new Date())],
          },
          {
            label: "Last Year",
            value: [startOfYear(new Date()), endOfYear(new Date())],
          },
          { label: "All Time", value: [new Date(2018, 1, 1), new Date()] },
        ]}
        setShowRange={setShowRange}
        shownStartDate={rangeToDate[currentRange].startDate}
        shownEndDate={rangeToDate[currentRange].endDate}
        datePickerState={datePickerState}
        updateDatePickerState={updateDatePickerState}
      />
    </div>
  );
}

export default App;
