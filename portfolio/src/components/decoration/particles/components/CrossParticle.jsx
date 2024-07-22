import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function CrossParticle({ screenPosition, lifeTime, color }) {
  const [isVisible, setIsVisible] = useState(true);
  const muiTheme = useTheme();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, lifeTime);

    return () => clearTimeout(timer);
  }, [lifeTime]);

  const particleStyle = {
    position: "fixed",
    top: screenPosition.y,
    left: screenPosition.x,
    width: "10px",
    height: "10px",
    zIndex: 0,
    transition: muiTheme.transitions.create(["opacity"], {
      duration: 1000,
    }),
    opacity: isVisible ? 1 : 0,
  };

  const verticalBarStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "2px",
    height: "10px",
    backgroundColor: color,
    transform: "translate(-50%, -50%) rotate(45deg)",
  };

  const horizontalBarStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "10px",
    height: "2px",
    backgroundColor: color,
    transform: "translate(-50%, -50%) rotate(45deg)",
  };

  return (
    <Box sx={particleStyle}>
      <Box sx={verticalBarStyle}></Box>
      <Box sx={horizontalBarStyle}></Box>
    </Box>
  );
}
