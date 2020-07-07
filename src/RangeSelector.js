import React from "react";

import "./App.css";

export const RangeSelector = ({ ranges, currentRange, updateRange }) => {
  return (
    <div
      style={{ position: "absolute", top: "10%", left: "20%", display: "flex" }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",

          height: "auto",
        }}
      >
        <h5>Select Date Created</h5>

        {ranges.map((range) => (
          <button
            onClick={() => {
              console.log(range);
              updateRange(range);
            }}
            className={range === currentRange ? "selected-range" : ""}
            style={{
              margin: "1em",
              color: "lightblue",
              backgroundColor: "transparent",
              border: "1px solid lightblue ",
              padding: "1em",
              borderRadius: 10,
              outline: "none",
            }}
          >
            {range}
          </button>
        ))}
      </div>
    </div>
  );
};
