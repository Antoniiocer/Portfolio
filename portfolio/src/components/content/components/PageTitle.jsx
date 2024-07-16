import React from "react";
import { Box, Typography, useTheme } from "@mui/material";

export default function PageTitle() {
  const theme = useTheme();

  const titleStyles = {
    fontSize: theme.typography.h2.fontSize,
    fontWeight: theme.typography.fontWeightBold,
  };

  const boxStyles = {
    width: "100%",
    zIndex: 1001,
  };

  const bar1Styles = {
    width: "20%",
    height: "10px",
    backgroundColor: theme.palette.warning.main,
  };

  const bar2Styles = {
    width: "15%",
    height: "10px",
    backgroundColor: theme.palette.error.main,
  };

  const bar3Styles = {
    width: "10%",
    height: "10px",
    backgroundColor: theme.palette.info.main,
  };

  return (
    <Box sx={boxStyles}>
      <Typography sx={titleStyles}>Frontend Developer</Typography>
      <Box sx={bar1Styles} />
      <Box sx={bar2Styles} />
      <Box sx={bar3Styles} />
    </Box>
  );
}
