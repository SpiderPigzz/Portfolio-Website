import * as React from "react";
import { Grid, Typography, Paper } from "@mui/material";
import "../../../utils/Gradient.css";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  borderRadius: 12,
  padding: theme.spacing(2),
  textAlign: "center",
}));

export default function Bio() {
  return (
    <div
      style={{
        justifyContent: "center",
        display: "flex",
      }}
    >
      {/* //fix paddingg */}
      <Grid
        container
        spacing={2}
        sx={{
          width: "90vw",
          overflow: "hidden",
          mt: "0.5%",
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
            display: "block",
            borderRadius: 8,
          }}
        >
          <Item>
            <Typography variant="h5" fontWeight={400}>
              What do you have so far?
            </Typography>
            <Typography variant="h3" fontWeight={700}>
              <span className="blue"> Nothing </span>
            </Typography>
          </Item>
        </Grid>
        <Grid
          container
          item
          xs={4}
          sx={{
            display: "block",
            borderRadius: 8,
          }}
        >
          <Item>
            <Typography variant="h5" fontWeight={400}>
              Due this week:
            </Typography>
            <Typography variant="h3" fontWeight={700}>
              <span className="crimson"> Arduino </span>
            </Typography>
          </Item>
        </Grid>
        <Grid
          container
          item
          xs={4}
          sx={{
            display: "block",
            borderRadius: 8,
          }}
        >
          <Item>
            <Typography variant="h5" fontWeight={400}>
              Incomplete Course:
            </Typography>
            <Typography variant="h3" fontWeight={700}>
              <span className="crimson"> Ricky Winarko </span>
            </Typography>
          </Item>
        </Grid>
      </Grid>
    </div>
  );
}
