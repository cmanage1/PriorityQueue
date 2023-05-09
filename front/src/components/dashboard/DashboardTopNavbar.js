import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import InfoIcon from '@mui/icons-material/Info';
import { LinkIconButton } from '../LinkIconButton';

export function DashboardTopNavbar() {
  const [t] = useTranslation();

  return (
    <Box>
      <LinkIconButton href="/" icon={<DashboardIcon />}>
        {t('dashboard')}
      </LinkIconButton>
      <LinkIconButton href="/about" icon={<InfoIcon />}>
        {t('about')}
      </LinkIconButton>
    </Box>
  );
}
