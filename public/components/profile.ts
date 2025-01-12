import React from "../lib/react.js";
import createElement from "./../lib/own/createElement";

interface ProfileProps {
  children: React.ReactNode;
  className?: string;
  style?: Record<string, string | number>;
}

function Profile({ children = "프로필 추가", className = "", style, ...restProps }: ProfileProps) {
  return React.createElement(
    "div",
    {
      className: "Profile",
      style: {
        display: "flex",
        flexFlow: "column",
        alignItems: "center",
      },
    },
    React.createElement(
      "button",
      {
        style: {
          backgroundColor: "#E8EEF2",
          width: "100px",
          height: "100px",
        },
      },
      " ",
      React.createElement(
        "p",

        {
          style: {
            margin: "0",
            fontSize: "32px",
          },
        },
        "+"
      )
    ),
    React.createElement(
      "p",
      {
        style: {
          color: "#656C71",
          margin: "0",
          marginTop: "8px",
          fontSize: "14px",
        },
      },
      children
    )
  );
}

export default Profile;
