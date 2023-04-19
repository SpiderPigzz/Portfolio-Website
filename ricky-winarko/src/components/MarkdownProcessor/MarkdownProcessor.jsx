import React from "react";
import Markdoc from "@markdoc/markdoc";
import {
  callout,
  Callout,
} from "components/MarkdownProcessor/schema/Callout.markdoc";
import {
  heading,
  Heading,
} from "components/MarkdownProcessor/schema/Heading.markdoc";
import {
  fence,
  Fence,
} from "components/MarkdownProcessor/schema/Fence.markdoc";
import { mcq, MCQ } from "components/MarkdownProcessor/schema/MCQ.markdoc";

const MarkdownProcessor = ({ markdownText }) => {
  if (markdownText) {
    const ast = Markdoc.parse(markdownText);

    const config = {
      tags: {
        callout,
        mcq,
      },
      nodes: {
        heading,
        fence,
      },
      variables: {},
    };

    const components = {
      Callout,
      Heading,
      Fence,
      MCQ,
    };

    const content = Markdoc.transform(ast, config);

    return Markdoc.renderers.react(content, React, { components });
  }

  return;
};

export default MarkdownProcessor;
