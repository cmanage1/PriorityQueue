import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import axios from "axios";
import { History } from "./history/History";
import { Simulation } from "./simulation/Simulation";

export function DashboardContent() {
  useEffect(() => {
    axios.get("http://localhost:7001/v1/health").then(() => {
      console.log("Server is up");
    });
  }, []);

  return (
    <Grid container spacing={2} sx={{ padding: "14px" }}>
      <Grid item xs={8}>
        <Grid sx={{ padding: "12px", boxShadow: 3 }}>
          <History />
        </Grid>
      </Grid>
      <Grid item xs={4}>
        <Grid sx={{ padding: "12px", boxShadow: 3 }}>
          <Simulation />
        </Grid>
      </Grid>
    </Grid>
  );
}
