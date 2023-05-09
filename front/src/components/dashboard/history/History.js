import React from "react";
import { Grid, Box } from "@mui/material";

export function History() {
  return (
    <Grid container>
      <Grid item>
        <Box>New Inputs</Box>
        <Box>Rate Limit</Box>
        <Box>Enqueue Button</Box>
      </Grid>
      <Grid item>
        <Box>Clickable sessions with time</Box>
      </Grid>
    </Grid>
  );
}
