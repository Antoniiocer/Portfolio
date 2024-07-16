import React from "react";
import { Box, useTheme } from "@mui/material";

export default function Stripes() {
  const theme = useTheme();
  const fixedContainerStyles = {
    position: "fixed",
    top: 0,
    right: 0,
    width: "300px",
    height: "35vh",
    overflow: "hidden",
    zIndex: -1,
  };

  const lineStyles = {
    width: "100%",
    height: "2px",
    padding: 3,
    transform: "skewY(45deg)",
    position: "absolute",
  };
  return (
    <Box sx={fixedContainerStyles}>
      <Box
        sx={{
          ...lineStyles,
          backgroundColor: theme.palette.warning.main,
          top: "20px",
          left: "0",
        }}
      />
      <Box
        sx={{
          ...lineStyles,
          backgroundColor: theme.palette.error.main,
          top: "60px",
          left: "0",
        }}
      />
      <Box
        sx={{
          ...lineStyles,
          backgroundColor: theme.palette.secondary.main,
          top: "100px",
          left: "0",
        }}
      />
    </Box>
  );
}
