import { Box, IconButton, Link } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';

export function LinkIconButton({ icon, href, children }) {
  return (
    <IconButton
      component={Link}
      href={href}
      sx={{ fontSize: '14px', borderRadius: '0px' }}
    >
      {icon}
      <Box sx={{ marginLeft: '12px' }}>{children}</Box>
    </IconButton>
  );
}

LinkIconButton.propTypes = {
  href: PropTypes.string,
  icon: PropTypes.node,
  children: PropTypes.node,
};
