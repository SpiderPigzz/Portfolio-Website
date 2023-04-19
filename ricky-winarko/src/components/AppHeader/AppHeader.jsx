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
  const { user } = useAuthContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    removeToken();
    navigate(getRoute("signin"), { replace: true });
  };

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
              console.log("this should work");
              navigate(getRoute("landing"));
            }}
          >
            <LearnrIcon size={54} />
          </Button>
          <Typography
            variant="h5"
            sx={{ flexGrow: 1, fontWeight: 800, letterSpacing: 6, ml: "1%" }}
          >
            Learnr .
          </Typography>
          {user ? (
            <Box>
              <Button href="/profile">{user.username}</Button>
              <Button variant="contained" onClick={handleLogout}>
                Logout
              </Button>
            </Box>
          ) : (
            <Box sx={{ spacing: 10 }}>
              <Button
                sx={{ color: "white" }}
                onClick={() => {
                  navigate(getRoute("signin"));
                }}
              >
                Login
              </Button>
              <Button
                sx={{ color: "white" }}
                onClick={() => {
                  navigate(getRoute("signup"));
                }}
              >
                SignUp
              </Button>
            </Box>
          )}
        </Toolbar>
      </NavBar>
    </Box>
  );
};

export default AppHeader;
