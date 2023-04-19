import * as React from "react";
import { Grid, Typography } from "@mui/material";
import ProductCard from "components/Reusables/Card";
import "../../utils/Gradient.css";

export default function Methodology() {
  return (
    <Grid
      container
      sx={{
        width: "100%",
        overflow: "hidden",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        alignItems: "center",
      }}
    >
      <Grid
        container
        item
        xs={12}
        sx={{
          p: "3%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ProductCard bg="#93d6ff" sx={{ width: "28%" }}>
          <Typography variant="h4" fontWeight={600}>
            Quality
          </Typography>
          <Typography variant="h6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            accumsan mi felis.
          </Typography>
        </ProductCard>
        <ProductCard bg="#ff1de1" sx={{ width: "28%" }}>
          <Typography variant="h4" fontWeight={600}>
            Personalized
          </Typography>
          <Typography variant="h6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            accumsan mi felis.
          </Typography>
        </ProductCard>
        <ProductCard bg="#ff7b00" sx={{ width: "25vw" }}>
          <Typography variant="h4" fontWeight={600}>
            Connectivity
          </Typography>
          <Typography variant="h6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            accumsan mi felis.
          </Typography>
        </ProductCard>
      </Grid>
    </Grid>
  );
}
