import React from "react";
import { useAuthContext } from "context/AuthContext";
import Progression from "components/Section/Progression";
import Bio from "./Section/Bio";
import Insight from "./Section/Insight";

const LearnrProfile = () => {
  const { user, isLoading, setUser } = useAuthContext();

  return (
    <div>
      <>
        <Bio />
        <Insight />
      </>
    </div>
  );
};

export default LearnrProfile;
