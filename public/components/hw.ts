import React from "../lib/react.js";
import Chip from "./chip";
import createElement from "./../lib/own/createElement";

function hw() {
  return React.createElement(
    "div",
    {
      className: "hw",
    },
    React.createElement(Chip),
    React.createElement(
      Chip,
      {
        style: {
          backgroundColor: "#FFFFFF",
          borderColor: "rgba(0, 0, 0, 0.1)",
          color: "black",
        },
      },
      "공개 예정"
    )
  );
}

export default hw;
