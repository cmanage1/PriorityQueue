import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import PropTypes from "prop-types";

const AppBar = styled(MuiAppBar)(({ theme, open }) => ({
  backgroundColor: "#f5f6fa",
  width: "100%",
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.easeOut,
    duration: theme.transitions.duration.enteringScreen,
  }),
}));

export default function BaseContainer({ children, topbar }) {
  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar sx={{ maxHeight: "70px", minHeight: "56px" }}>
          {topbar}
        </Toolbar>
      </AppBar>
      <Box sx={{ padding: "70px 0px 0px 0px", margin: "0px", width: "100%" }}>
        {children}
      </Box>
    </Box>
  );
}

BaseContainer.propTypes = {
  children: PropTypes.node,
  topbar: PropTypes.node,
};
