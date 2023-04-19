import React from "react";
import { useAuthContext } from "context/AuthContext";
import { API, GRAPHQL } from "utils/Constants";
import { useState, useEffect } from "react";
import { getToken } from "utils/helper";
import AppHeader from "components/AppHeader/AppHeader";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useQuery, gql } from "@apollo/client";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const GuidePage = ({ pageData }) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      children={pageData}
      components={{
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || "");
          return !inline && match ? (
            <SyntaxHighlighter
              children={String(children).replace(/\n$/, "")}
              style={dark} // theme
              language={match[1]}
              PreTag="section" // parent tag
              {...props}
            />
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          );
        },
      }}
    />
  );
};

export default GuidePage;
