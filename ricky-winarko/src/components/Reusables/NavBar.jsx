import * as React from "react";
import { AppBar, Box } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
import { Noise } from "utils/FileMapping";

const CustomNavBar = styled(AppBar)(({ theme }) => ({
  borderRadius: "4px",
  // boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.2)",
  backgroundColor: "rgba(198, 200, 200, 0.7)",
  fontWeight: "bold",
  transition: "all 0.2s ease",
  "&:hover": {
    backgroundColor: "rgba(139, 156, 180, 0.7)",
    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.3)",
    transform: "translate(0px, -2px)",
  },
  "&:active": {
    boxShadow: "0px 0px 1px rgba(0, 0, 0, 0.3)",
    transform: "translate(0px, 3px)",
  },
  "&:after": {
    content: "''",
    background: `url(${Noise})`,
    position: "absolute",
    top: "0px",
    left: "0px",
    width: "100%",
    height: "100%",
    zIndex: -1,
    opacity: 0.4 /* Here is your opacity */,
  },
  // background: `linear-gradient(to right, rgba(0,0,0,0.3),${alpha(
  //   theme.palette.primary.main,
  //   0.5
  // )})`,
  backdropFilter: "blur(8px)",
  marginTop: "0.5%",
  borderRadius: 15,
  boxShadow: `0 3px 5px 2px rgba(139, 156, 180, 0.3)`,
}));

export default function NavBar(props) {
  return (
    <CustomNavBar>
      {/* <Box
        sx={{
          backgroundImage: `url(${Noise})`,
          width: "100%",
          height: "100%",
          opacity: 0.45,
        }}
      > */}
      {props.children}
      {/* </Box> */}
    </CustomNavBar>
  );
}
