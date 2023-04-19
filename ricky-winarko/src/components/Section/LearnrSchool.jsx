import * as React from "react";
import { Grid, Typography, Box } from "@mui/material";
import "../../utils/Gradient.css";
import Badges from "components/Reusables/Badges";
import CTabs from "components/Reusables/CTabs";
import { HardwareBackground } from "utils/FileMapping";

export default function Content() {
  const info = [
    { key: 0, label: "Workshops", color: "pink" },
    { key: 1, label: "Classes ", color: "orange" },
    { key: 2, label: "Bootcamp", color: "aqua" },
    { key: 4, label: "School Partnership", color: "yellow" },
  ];

  return (
    <Box
      sx={{
        justifyContent: "center",
        display: "flex",
        backgroundImage: `url(${HardwareBackground})`,
        backgroundSize: "cover",
        paddingTop: "2rem",
        paddingBottom: "2rem",
      }}
    >
      <Grid
        container
        sx={{
          width: "90vw",
          minHeight: "55vh",
          display: "flex",
          overflow: "hidden",
          m: 0,
          outline: "0.1em solid",
          background: "rgba(22, 29, 45, 0.3)",
          backdropFilter: "blur(8px)",
          outlineColor: "purple",
          borderRadius: 8,
          textAlign: "center",
          alignItems: "center",
          alignContent: "center",
        }}
      >
        <Grid
          container
          item
          xs={12}
          sx={{
            p: "3%",
            display: "block",
          }}
        >
          <Typography variant="h4" fontWeight={400}>
            Introducing:
          </Typography>
          <Typography variant="h1" fontWeight={700}>
            <span className="pink"> Learnr School </span>
          </Typography>
          <Typography variant="h4" fontWeight={400} sx={{ my: "2%" }}>
            Introducing a{" "}
            <span className="blue">technology-based learning</span> into
            educational institutions.
            <br />
          </Typography>
          <Typography variant="h4" fontWeight={700} sx={{ mt: "3%" }}>
            <span className=""> We provide our services through: </span>
          </Typography>
          <CTabs />
        </Grid>
      </Grid>
    </Box>
  );
}
