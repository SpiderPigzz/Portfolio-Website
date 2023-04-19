import { useEffect, useState } from "react";
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Box,
} from "@mui/material";
import { Callout } from "./Callout.markdoc";

export const mcq = {
  render: "MCQ",
  children: ["paragraph", "tag", "list"],
  attributes: {
    title: {
      type: String,
      default: "MCQ",
      required: true,
    },
    options: {
      type: Array,
      default: [],
      required: true,
    },
    answer: {
      type: Array,
      required: true,
    },
    hint: {
      type: String,
    },
    explanation: {
      type: String,
    },
    mode: {
      type: String,
      default: "single",
      matches: ["single", "multiple"],
    },
  },
};

// <MCQQuestion
//         question="What is the capital of France?"
//         options={["Paris", "London", "Berlin", "Madrid"]}
//         answer={["London", "Paris"]}
//         hint={"It's easy! Starts with a P"}
//         explanation="Paris is the capital of France."
//         mode="multiselect"
//       />

export function MCQ({
  title,
  options,
  answer,
  hint,
  explanation,
  mode,
  children,
}) {
  const [selected, setSelected] = useState(new Set());
  const [showAnswer, setShowAnswer] = useState(false);
  const [error, setError] = useState();
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    if (mode === "single") {
      setSelected([]);
    } else {
      setSelected(new Set());
    }

    if (!Array.isArray(answer) || !Array.isArray(options)) {
      setError(
        `Please provide an array '["value"]' for answer and options, even if there is only 1!`
      );
    } else if (answer.length == 0) {
      setError(`Please provide at least one answer!`);
    } else if (mode === "single" && answer.length != 1) {
      setError(`There are multiple answers, but you can only select one at a time.
        Please reduce the number of answers to 1 or change mode to
        multiselect!`);
    } else if (!answer.every((item) => options.includes(item))) {
      setError(`The answers provided do not fit the options!`);
    } else setError();
  }, [mode, answer, options]);

  const handleChange = (event) => {
    if (mode === "single") {
      setSelected([event.target.value]);
    } else {
      const newSelected = new Set(selected);
      if (newSelected.has(event.target.value)) {
        newSelected.delete(event.target.value);
      } else {
        newSelected.add(event.target.value);
      }
      setSelected(newSelected);
    }
  };

  const handleSubmit = () => {
    setShowAnswer(true);
  };

  const handleHint = () => {
    setShowHint(true);
  };

  const isCorrect = () => {
    if (mode === "single") {
      return selected.includes(answer[0]);
    } else {
      return (
        selected.size === answer.length &&
        [...selected].every((item) => answer.includes(item))
      );
    }
  };

  return (
    <Box>
      <FormControl
        component="fieldset"
        sx={{ display: "flex", flexDirection: "column", gap: "8px", flex: 1 }}
      >
        <FormLabel component="legend">{title}</FormLabel>
        {error ? (
          <Callout title={"MCQ Parameter Error"} type={"error"}>
            {error}
          </Callout>
        ) : (
          <></>
        )}
        {children}
        {hint ? (
          <Button variant="outlined" onClick={handleHint}>
            Hint
          </Button>
        ) : (
          <></>
        )}

        {mode !== "single" && !Array.isArray(selected) ? (
          options.map((option) => (
            <FormControlLabel
              key={option}
              control={
                <Checkbox
                  checked={selected.has(option)}
                  onChange={handleChange}
                  value={option}
                />
              }
              label={option}
            />
          ))
        ) : (
          <RadioGroup value={selected} onChange={handleChange}>
            {options.map((option) => (
              <FormControlLabel
                key={option}
                value={option}
                control={<Radio />}
                label={option}
              />
            ))}
          </RadioGroup>
        )}
        {showHint ? (
          <Callout title={"Hint"} type={"info"}>
            {hint}
          </Callout>
        ) : (
          <></>
        )}
        <Button variant="contained" onClick={handleSubmit}>
          Submit
        </Button>

        {showAnswer && (
          <Callout
            title={isCorrect() ? "Correct!" : "Incorrect. Try again!"}
            type={isCorrect() ? "success" : "error"}
          >
            <p>{explanation}</p>
          </Callout>
        )}
      </FormControl>
    </Box>
  );
}
