import React, { useEffect } from 'react';
import { Grid, Box } from '@mui/material';
import axios from 'axios';

export function DashboardContent() {
  useEffect(() => {
    axios.get('http://localhost:7001/health').then(() => {
      console.log('Server is up');
    });
  }, []);
  return (
    <Grid container spacing={2} sx={{ padding: '14px' }}>
      <Grid item xs={8}>
        <Box sx={{ padding: '12px', boxShadow: 3 }}>History</Box>
      </Grid>
      <Grid item xs={4}>
        <Box sx={{ padding: '12px', boxShadow: 3 }}>Simulation</Box>
      </Grid>
    </Grid>
  );
}
