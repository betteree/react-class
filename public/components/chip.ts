import React from "../lib/react.js";

interface ChipProps {
  children: React.ReactNode;
  style?: Record<string, string | number>;
}

function Chip({ children = "텍스트", style, ...restProps }: ChipProps) {
  return React.createElement(
    "button",
    {
      className: "ChipBox",
      style: {
        background: "none",
        backgroundColor: "#004FFF",
        color: "#FFFFFF",
        padding: "6px 12px",
        borderRadius: "20px",
        border: "1px solid #004FFF",
        ...style,
      },
    },
    children
  );
}

export default Chip;
