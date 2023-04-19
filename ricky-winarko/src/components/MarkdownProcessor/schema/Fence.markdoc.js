import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export const fence = {
  render: "Fence",
  attributes: {
    level: { type: Number, required: true, default: 1 },
    content: { type: String },
    language: { type: String },
  },
};

export function Fence({ content, language }) {
  return (
    <SyntaxHighlighter
      lineProps={{ style: { wordBreak: "break-all", whiteSpace: "pre-wrap" } }}
      wrapLines={true}
      language={language}
      style={a11yDark}
    >
      {content}
    </SyntaxHighlighter>
  );
}
