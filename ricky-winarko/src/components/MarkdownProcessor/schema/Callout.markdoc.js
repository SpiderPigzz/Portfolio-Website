import React from "react";
import { Alert, AlertTitle } from "@mui/material";

export const callout = {
  render: "Callout",
  children: ["paragraph", "tag", "list"],
  attributes: {
    type: {
      type: String,
      default: "info",
      matches: ["success", "error", "info", "warning"],
    },
    title: {
      type: String,
    },
  },
};

const TYPE_MAP = {
  note: {
    color: "#8792a2",
  },
  caution: {
    color: "#d97917",
  },
  check: {
    color: "#000000",
  },
  warning: {
    color: "#ed5f74",
  },
};

export function Callout({ children, type, title }) {
  return (
    <Alert severity={type}>
      <AlertTitle>{title}</AlertTitle>
      {children}
    </Alert>

    // <div
    //   className="callout"
    //   style={{
    //     backgroundColor: TYPE_MAP[type].color,
    //   }}
    // >
    //   <h3>{title}</h3>
    //   {children}
    // </div>
  );
}
