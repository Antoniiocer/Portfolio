import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function CircleParticle({ screenPosition, lifeTime, color }) {
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
    width: "5px",
    height: "5px",
    borderRadius: "100%",
    backgroundColor: color,
    zIndex: 0,
    transition: muiTheme.transitions.create(["opacity"], {
      duration: 1000,
    }),
    opacity: isVisible ? 1 : 0,
  };

  return <Box sx={particleStyle}></Box>;
}
