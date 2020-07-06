import React, { useState } from "react";
import { addDays } from "date-fns";
import "./App.css";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import {
  createStaticRanges,
  DateRange,
  DefinedRange,
  Calendar,
} from "react-date-range";

const renderStaticRangeLabel = () => <StaticRenderingLabel />;

const StaticRenderingLabel = (props) => {
  // const labels = [
  //   "Today",
  //   "This Month",
  //   "Last Month",
  //   "Till Today as of month",
  //   "This Year",
  //   "Last Year",
  //   "All time",
  //   "Custom Range",
  // ].map((elem) => );

  return <span>{"Holla"}</span>;
};
function App() {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  const predefinedRanges = createStaticRanges([
    {
      label: "Custom Range",
      range: () => ({
        startDate: new Date(),
        endDate: new Date(),
      }),
      isSelected: () => {
        console.log("selected");
        return true;
      },
    },
    {
      label: "Today",
      range: () => ({
        startDate: new Date(),
        endDate: new Date(),
      }),
      isSelected() {
        return true;
      },
    },
    {
      label: "This Month",
      range: () => ({
        startDate: null,
        endDate: null,
      }),
      isSelected() {
        return true;
      },
    },
    {
      label: "Last Month",
      range: () => ({
        startDate: null,
        endDate: null,
      }),
      isSelected() {
        return true;
      },
    },

    {
      label: "This Year",
      range: () => ({
        startDate: null,
        endDate: null,
      }),
      isSelected() {
        return true;
      },
    },
    {
      label: "Last Year",
      range: () => ({
        startDate: null,
        endDate: null,
      }),
      isSelected() {
        return true;
      },
    },
    {
      label: "All time",
      range: () => ({
        startDate: null,
        endDate: null,
      }),
      isSelected() {
        return true;
      },
    },
  ]);
  return (
    <div style={{ display: "flex" }}>
      <DefinedRange
        renderStaticRangeLabel={renderStaticRangeLabel}
        staticRanges={predefinedRanges}
        inputRanges={[]}
        onChange={(item) => setState([item.selection])}
      />
      <DateRange
        onChange={(item) => setState([item.selection])}
        showSelectionPreview={true}
        months={2}
        ranges={state}
        direction="horizontal"
      />
    </div>
  );
}

export default App;
