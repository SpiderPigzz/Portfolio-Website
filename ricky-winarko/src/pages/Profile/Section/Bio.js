import * as React from "react";
import { Grid, Typography } from "@mui/material";
import "../../../utils/Gradient.css";
import Badges from "components/Reusables/Badges";
import CTabs from "components/Reusables/CTabs";

export default function Bio() {
  return (
    <div
      style={{
        justifyContent: "center",
        display: "flex",
      }}
    >
      <Grid
        container
        sx={{
          width: "90vw",
          display: "flex",
          overflow: "hidden",
          m: "0.5%",
          outline: "0.1em solid",
          background: "black",
          outlineColor: "purple",
          borderRadius: 8,
          alignItems: "center",
          alignContent: "center",
          textAlign: "left",
        }}
      >
        <Grid
          container
          item
          xs={4}
          sx={{
            p: "3%",
            display: "block",
          }}
        >
          <Typography variant="h5" fontWeight={400}>
            Your Profile:
          </Typography>
          <Typography variant="h3" fontWeight={700}>
            <span className="pink"> Ricky Winarko </span>
          </Typography>
        </Grid>
        <Grid
          container
          item
          xs={4}
          sx={{
            p: "3%",
            display: "block",
          }}
        >
          <Typography variant="h5" fontWeight={400}>
            You've been with us for:
          </Typography>
          <Typography variant="h3" fontWeight={700}>
            <span className="orange"> 6 Months </span>
          </Typography>
        </Grid>
        <Grid
          container
          item
          xs={4}
          sx={{
            p: "3%",
            display: "block",
          }}
        >
          <Typography variant="h5" fontWeight={400}>
            Short Bio:
          </Typography>
          <Typography variant="h6" fontWeight={700}>
            <span className="orange">
              I am interested in AI or whaetever it is. to the moon is the way
              to go... 🔥{" "}
            </span>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
