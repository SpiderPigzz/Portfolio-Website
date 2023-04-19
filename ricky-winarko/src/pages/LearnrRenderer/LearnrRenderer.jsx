import React from "react";
import { Modal } from "antd";
import { useAuthContext } from "context/AuthContext";
import { API, HEADER_HEIGHT } from "../../utils/Constants";
import { useState, useEffect } from "react";
import { getToken } from "../../utils/helper";
import AppHeader from "../../components/AppHeader/AppHeader";
import { useGQLGet, useGQLPost } from "components/GraphQLCallback";
import { styled } from "@mui/material/styles";
import { Box, Paper, TextField } from "@mui/material";
import MarkdownProcessor from "components/MarkdownProcessor/MarkdownProcessor";

import { Grid, Typography } from "@mui/material";

const CodeTextEditor = ({ sx, code, setCode }) => {
  const handleCodeChange = (event) => {
    setCode(event.target.value);
  };

  return (
    <Grid sx={sx} container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h5">Code Editor</Typography>
      </Grid>
      <Grid item xs={12}>
        <TextField
          multiline
          minRows={10}
          maxRows={30}
          fullWidth
          value={code}
          onChange={handleCodeChange}
          variant="outlined"
        />
      </Grid>
    </Grid>
  );
};

const LearnrRenderer = () => {
  const [code, setCode] = useState("");

  return (
    <Box>
      <AppHeader />
      <Box sx={{ marginTop: HEADER_HEIGHT, display: "flex" }}>
        <CodeTextEditor sx={{ flex: 1 }} code={code} setCode={setCode} />
        <Box sx={{ flex: 1 }}>
          <MarkdownProcessor markdownText={code} />
        </Box>
      </Box>
    </Box>
  );
};

export default LearnrRenderer;
