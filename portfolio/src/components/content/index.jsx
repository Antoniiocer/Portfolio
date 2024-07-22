import React from "react";
import PageTitle from "./components/PageTitle";
import { Box, useTheme } from "@mui/material";
import InfoContainer from "./components/infoContainer";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import JavascriptIcon from "@mui/icons-material/Javascript";
import { AboutMe, Projects, TechStack } from "./components/containersContent";

export default function Content() {
  const theme = useTheme();
  const containerProps = {
    width: "100%",
    height: "100%",
    m: 0,
    p: 0,
    position: "relative",
  };

  return (
    <Box sx={containerProps}>
      <PageTitle />
      <InfoContainer
        position={2}
        color={theme.palette.error}
        mainContainer={{
          sx: { top: "20%" },
        }}
        secondaryContainer={{
          width: "90%",
        }}
        icon={<AssignmentIndIcon sx={{ fontSize: "200%" }} />}
        content={<AboutMe />}
      />
      <InfoContainer
        position={3}
        color={theme.palette.primary}
        mainContainer={{
          sx: { top: "30%" },
        }}
        secondaryContainer={{
          width: "70%",
        }}
        icon={<JavascriptIcon sx={{ fontSize: "400%" }} />}
        content={<TechStack />}
      />
      <InfoContainer
        position={4}
        color={theme.palette.secondary}
        mainContainer={{
          sx: { top: "40%" },
        }}
        secondaryContainer={{
          width: "85%",
        }}
      />
      <InfoContainer
        position={5}
        color={theme.palette.warning}
        mainContainer={{
          sx: { top: "50%" },
        }}
        secondaryContainer={{
          width: "75%",
        }}
        icon={<RocketLaunchIcon sx={{ fontSize: "200%" }} />}
        content={<Projects />}
      />
    </Box>
  );
}
