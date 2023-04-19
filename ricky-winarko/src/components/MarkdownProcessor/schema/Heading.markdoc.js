import React from "react";
import { Alert, AlertTitle, Typography } from "@mui/material";

export const heading = {
  render: "Heading",
  children: ["paragraph", "tag", "list", "inline"],
  attributes: {
    level: { type: Number, required: true, default: 1 },
  },
};

export function Heading({ children, level }) {
  return <Typography variant={`h${level}`}>{children}</Typography>;
}
