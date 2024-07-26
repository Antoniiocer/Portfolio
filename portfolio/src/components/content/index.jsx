import React from "react";
import { Box } from "@mui/material";
import { PageHeader, PageInfo } from "./components";

export default function Content() {
  const containerProps = {
    width: "100%",
    height: "100%",
    m: 0,
    p: 0,
    position: "relative",
  };

  return (
    <Box sx={containerProps}>
      <PageHeader />
      <PageInfo />
    </Box>
  );
}
