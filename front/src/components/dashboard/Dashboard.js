import React from 'react';
import BaseContainer from '../BaseContainer';
import { DashboardTopNavbar } from './DashboardTopNavbar';
import { DashboardContent } from './DashboardContent';

export function Dashboard() {
  return (
    <BaseContainer topbar={<DashboardTopNavbar />}>
      <DashboardContent />
    </BaseContainer>
  );
}
