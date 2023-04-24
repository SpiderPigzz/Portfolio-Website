import * as React from "react";
import { Grid, Link, Typography } from "@mui/material";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import "../../utils/Gradient.css";
import { HeroBackground } from "utils/FileMapping";
import SkeuButton from "components/Reusables/SkeuButton";
import { Noise } from "utils/FileMapping";
import SkeuCard from "components/Reusables/SkeuCard";

export default function HeroBanner() {
  return (
    <Grid
      container
      sx={{
        height: "100vh",
        width: "100%",
        overflow: "hidden",
        alignItems: "center",
        backgroundImage: `linear-gradient(to top, #161D2D, rgba(0,0,0,0.1)), url(${HeroBackground})`,
        backgroundSize: "cover",
        backgroundRepeat: "repeat",
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
        <Typography variant="h1" fontWeight={600}>
          <span className="orange">Hi, nice to meet you.</span> <br />
        </Typography>
        <Typography variant="h1" fontWeight={600}>
          <span className="">
            I'm <Link underline="hover">Ricky</Link>
          </span>
          <br />
        </Typography>
        <Typography variant="h4" fontWeight={400} sx={{ mt: "1%" }}>
          <span className="red">Learn more about me!</span> <br />
        </Typography>
        <KeyboardDoubleArrowDownIcon sx={{ fontSize: 64, mt: "2%" }} />
        <SkeuButton> This is a test</SkeuButton>

        {/* <Button
          variant="contained"
          size="large"
          sx={{ mt: "2%", alignContent: "center" }}
          endIcon={<PlayCircleFilledIcon />}
        >
          Start Now
        </Button> */}
      </Grid>
    </Grid>
  );
}
