import * as React from "react";
import { Grid, Typography } from "@mui/material";
import "../../utils/Gradient.css";

const CourseContent = [
  { name: "7+", color: "#b80050", text: "Combined Years of Experience" },
  { name: "EEE", color: "#ff1fcb", text: "Specialization tracks" },
  { name: "30+", color: "#b80050", text: "Courses Handled" },
];

export default function Course() {
  return (
    <div
      style={{
        justifyContent: "center",
        display: "flex",
        marginBottom: "6%",
      }}
    >
      <Grid
        container
        sx={{
          width: "100vw",
          display: "flex",
          overflow: "hidden",
          textAlign: "left",
          m: 0,
        }}
      >
        <Grid
          container
          item
          xs={12}
          md={12}
          sx={{
            px: "6%",
            py: "6%",
            display: "block",
            borderRadius: 6,
          }}
        >
          <Typography variant="h2" fontWeight={500} sx={{ p: "2%" }}>
            Microbit. <span className="green">Sustainability. </span>
            Electronics. Hardware. Software. Arduino. Rapid-prototyping.{" "}
            <span className="orange">
              Explore the range of course we provide. Many more...
            </span>
          </Typography>
        </Grid>
        <Grid
          container
          spacing={1}
          xs={12}
          md={12}
          sx={{
            textAlign: "center",
            display: "flex",
            px: "2%",
            alignItems: "center",
          }}
        >
          <Typography
            width={"100%"}
            variant="h4"
            fontWeight={500}
            textAlign={"center"}
            sx={{ m: "2%" }}
          >
            <span className="">Learnr in Numbers :</span>
          </Typography>
          {CourseContent.map((course, index) => (
            <Grid item xs={4} md={4}>
              <div>
                <Typography variant="h1" fontWeight={500}>
                  <span className="pink">{course.name}</span>
                </Typography>
                <Typography variant="h5" fontWeight={500}>
                  {course.text}
                </Typography>
              </div>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </div>
  );
}
