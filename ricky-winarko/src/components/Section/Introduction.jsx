import * as React from "react";
import { Grid, Typography, Box } from "@mui/material";
import Badges from "components/Reusables/Badges";
import "../../utils/Gradient.css";
import { SpaceBackground } from "utils/FileMapping";

export default function Introduction() {
  const info = [
    { key: 0, label: "Experential Learning", color: "pink" },
    { key: 1, label: "Innovative ", color: "orange" },
    { key: 2, label: "AI", color: "aqua" },
    { key: 3, label: "Personalized teaching", color: "Aquamarine" },
    { key: 4, label: "Hardware", color: "pink" },
    { key: 5, label: "Software", color: "yellow" },
    { key: 6, label: "Customizable Roadmap", color: "violet" },
  ];
  return (
    <Grid
      container
      sx={{
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        m: 0,
        p: 4,
        paddingTop: "2rem",
        alignItems: "center",
        backgroundImage: `linear-gradient(to top, rgba(22, 29, 45, 1) 10%, rgba(22, 29, 45, 0) 25%, rgba(22, 29, 45, 0) 75% ,rgba(22, 29, 45, 1) 90%),url(${SpaceBackground})`,
        backgroundColor: `#161D2D`,
        backgroundBlendMode: "color-dodge",
        backgroundSize: "cover",
        maskImage: `linear-gradient(to top, rgba(0, 0, 0, 0) 5%, rgba(255, 255, 255, 1) 15%, rgba(255, 255, 255, 1) 85% ,rgba(0, 0, 0, 0) 95%)`,
      }}
    >
      <Grid
        container
        item
        xs={12}
        md={12}
        sx={{
          p: "5%",
          display: "block",
          alignContent: "center",
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h3" color={"primary"} fontWeight={600}>
          <span className="">Introduction to myself</span>
        </Typography>
        <Typography variant="h2" fontWeight={500}>
          <span className="">My values.</span>
        </Typography>
        <Typography variant="h6" fontWeight={500} sx={{ m: "1%" }}>
          I am a software developer by day and an artist by night <br />
          <br /> I enjoy the process of learning and discovery and am unafraid
          of trying new things!
        </Typography>
        <Badges info={info} />
      </Grid>
    </Grid>
  );
}
