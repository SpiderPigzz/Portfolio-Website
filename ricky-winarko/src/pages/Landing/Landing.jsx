//Main Page, first page that user will see when entering website

import React from "react";
import AppHeader from "../../components/AppHeader/AppHeader";
import HeroBanner from "components/Section/Hero";
import Introduction from "components/Section/Introduction";
import MapIntro from "components/Section/MapIntro";
import Content from "components/Section/LearnrSchool";
import Progression from "components/Section/Progression";
import Course from "components/Section/Course";
import Question from "components/Section/Question";
import { useAuthContext } from "context/AuthContext";
import { Box } from "@mui/material";

const LandingPage = () => {
  const { user, isLoading, setUser } = useAuthContext();

  return (
    <Box sx={{ backgroundColor: "#161D2D" }}>
      <AppHeader />

      <HeroBanner />
      <Introduction />
      <Content />
      <Course />
      <MapIntro />
      <Progression />
      <Question />
    </Box>
  );
};

export default LandingPage;
