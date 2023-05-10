import React from "react";
import { Grid, Paper, Box, Divider } from "@mui/material";

export function ValueBox(props) {
  return (
    <Grid item xs={4}>
      <Box typography="body1" sx={{ color: "grey" }} align="center">
        {props.index}
      </Box>
      <Divider />
      <Paper>
        <Box typography="h5" align="center" height={50}>
          {props.value}
        </Box>
      </Paper>
    </Grid>
  );
}
