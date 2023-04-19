import * as React from "react";
import { Drawer } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";

const CustomDrawer = styled(Drawer)(({ theme }) => ({
  "& .MuiDrawer-paper": {
    background: `linear-gradient(to right, rgba(0,0,0,0.2),${alpha(
      theme.palette.primary.main,
      0.5
    )})`,
  },
  backdropFilter: "blur(15px)",
  marginTop: "0.5%",
  borderRadius: 15,
  boxShadow: `0 3px 10px 2px ${alpha(theme.palette.primary.main, 0.3)}`,
}));

export default function LeftDrawer({ sx, variant, anchor, children }) {
  return (
    <CustomDrawer sx={sx} variant={variant} anchor={anchor}>
      {children}
    </CustomDrawer>
  );
}
