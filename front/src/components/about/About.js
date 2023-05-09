import React from "react";
import BaseContainer from "../BaseContainer";
import { DashboardTopNavbar } from "../dashboard/DashboardTopNavbar";
import { Grid, Box } from "@mui/material";

export function About() {
  return (
    <BaseContainer topbar={<DashboardTopNavbar />}>
      <Grid container spacing={2} sx={{ padding: "14px" }}>
        <Grid item xs={12}>
          <Box sx={{ padding: "12px", boxShadow: 3 }}>Hi</Box>
        </Grid>
      </Grid>
    </BaseContainer>
  );
}
