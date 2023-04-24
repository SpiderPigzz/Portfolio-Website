//Top Bar that deals with user login
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import { removeToken } from "utils/helper";
import { getRoute } from "../../utils/routes";
import NavBar from "../Reusables/NavBar";
import { Box, Button, Toolbar, Typography } from "@mui/material";
import { HEADER_HEIGHT } from "utils/Constants";
import { LearnrAppIcon } from "utils/FileMapping";

const AppHeader = () => {
  const navigate = useNavigate();

  function LearnrIcon(props) {
    return (
      <img
        src={LearnrAppIcon}
        alt="logo"
        style={{ width: "64px", height: "64px" }}
      />
    );
  }

  return (
    <Box
      sx={{
        flexGrow: 1,
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
      }}
    >
      <NavBar position="static" sx={{ height: HEADER_HEIGHT }}>
        <Toolbar>
          <Button
            onClick={() => {
              navigate(getRoute("landing"));
            }}
          >
            <LearnrIcon size={54} />
          </Button>
          <Typography
            variant="h5"
            sx={{ flexGrow: 1, fontWeight: 800, letterSpacing: 6, ml: "1%" }}
          >
            RICKY
          </Typography>
          <Box></Box>
        </Toolbar>
      </NavBar>
    </Box>
  );
};

export default AppHeader;
