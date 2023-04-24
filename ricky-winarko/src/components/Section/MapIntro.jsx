import * as React from "react";
import { Button, Grid, Typography } from "@mui/material";
import Countdown from "react-countdown";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import "../../utils/Gradient.css";
import { AbstractSpaceBackground, HeroBackground } from "utils/FileMapping";

export default function MapIntro() {
  return (
    <Grid
      container
      sx={{
        height: "100vh",
        width: "100%",
        overflow: "hidden",
        alignItems: "center",
        backgroundImage: `linear-gradient(to top, rgba(22, 29, 45, 1) 10%, rgba(22, 29, 45, 0) 25%, rgba(22, 29, 45, 0) 75% ,rgba(22, 29, 45, 1) 90%),url(${AbstractSpaceBackground})`,
        backgroundColor: `#161D2D`,
        backgroundBlendMode: "color",
        backgroundSize: "cover",
        // maskImage: `linear-gradient(to top, rgba(0, 0, 0, 0) 5%, rgba(255, 255, 255, 1) 15%, rgba(255, 255, 255, 1) 85% ,rgba(0, 0, 0, 0) 95%)`,
      }}
    >
      <Grid
        container
        item
        xs={12}
        sx={{
          p: "3%",
          display: "block",
          textAlign: "center",
        }}
      >
        <Typography variant="h4" fontWeight={500}>
          <span className="">Introducing:</span> <br />
        </Typography>
        <Typography variant="h1" fontWeight={600}>
          <span className="pink">Learnr Map</span>
          <br />
        </Typography>
        <Typography variant="h4" fontWeight={500} sx={{ mt: "1%" }}>
          <span className="">
            Built with continuity and interconnectivity in mind.
          </span>
          <br />
        </Typography>
        <Typography variant="h2" fontWeight={400} sx={{ m: "1%" }}>
          <span className="orange">Coming Soon.</span>
        </Typography>
        <Button
          variant="contained"
          size="large"
          sx={{ mt: "2%", alignContent: "center" }}
          endIcon={<PlayCircleFilledIcon />}
        >
          Stay tuned for the launch
        </Button>
      </Grid>
    </Grid>
  );
}
