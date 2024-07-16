import React from "react";
import PageTitle from "./components/PageTitle";
import { Box } from "@mui/material";
import InfoContainer from "./components/infoContainer";

export default function Content() {
  const containerPops = {
    width: "100%",
    height: "100%",
    m: 0,
    p: 0,
  };
  return (
    <Box sx={containerPops}>
      <PageTitle />
      <InfoContainer />
    </Box>
  );
}
