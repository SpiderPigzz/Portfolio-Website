import * as React from "react";
import { Grid, Typography } from "@mui/material";
import CustomizedSteppers from "components/Reusables/Stepper";
import "../../utils/Gradient.css";

export default function Progression() {
  return (
    <div
      style={{
        justifyContent: "center",
        display: "flex",
        textAlign: "center",
        marginBottom: "4%",
      }}
    >
      <Grid
        container
        sx={{
          width: "90vw",
          minHeight: "55vh",
          overflow: "hidden",
          m: 0,
          p: "2%",
          outline: "0.1em solid",
          background: "black",
          outlineColor: "purple",
          borderRadius: 8,
          alignContent: "center",
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        <Grid
          container
          item
          xs={12}
          sx={{
            px: "5%",
            py: "3%",
            display: "block",
          }}
        >
          <Typography
            variant="h2"
            color={"primary"}
            textAlign={"left"}
            fontWeight={600}
          >
            <span className="biege">with Learnr Map</span>
          </Typography>
          <Typography
            variant="h5"
            textAlign={"left"}
            fontWeight={500}
            sx={{ mt: "2%", mb: "2%" }}
          >
            <span className="grey">
              Introducing our general course structure, a truly hollistic
              experience through the perfect integration between hardware and
              software based learning.
            </span>
          </Typography>
          <br />
          <CustomizedSteppers />
        </Grid>
      </Grid>
    </div>
  );
}
