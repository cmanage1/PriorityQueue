import React from 'react';
import './styles.css';
import './i18n';
import Box from '@mui/material/Box';
import { AppRoutes } from './components/AppRoutes';

export default function App() {
  return (
    <Box>
      <AppRoutes />
    </Box>
  );
}
