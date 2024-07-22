import React, { useState } from "react";
import { useTheme, Box, Grid, IconButton } from "@mui/material";

export default function InfoContainer({ content, icon, position, color, ...props }) {
  const theme = useTheme();
  const [isContainerOpen, setIsContainerOpen] = useState(false);

  const containerProps = {
    width: "85%",
    m: 0,
    p: 0,
    height: "100%",
    position: "absolute",
    overflow: "hidden",
    ...props.mainContainer?.sx,
  };

  const contentContainerProps = {
    height: "100%",
    backgroundColor: color.dark,
    pr: "10px",
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeInOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: isContainerOpen ? "0%" : "-92%",
    zIndex: isContainerOpen ? 6 - position : 1,
    ...props?.mainContainer,
  };

  const stickerContainerProps = {
    width: "100%",
    height: "10%",
    borderRadius: "0 20% 20% 0",
    backgroundColor: color.main,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeInOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    "&:hover": {
      cursor: "pointer",
      scaleX: 1.2,
      marginLeft: isContainerOpen ? "0%" : "3%",
    },
    ...props?.secondaryContainer,
  };

  const iconProps = {
    color: "white",
    width: "100%",
    height: "100%",
    transition: theme.transitions.create("border-radius", {
      easing: theme.transitions.easing.easeInOut,
      duration: theme.transitions.duration.short,
    }),
    "&:hover": {
      borderRadius: "0 20% 20% 0",
    },
    ...props?.stickerProps,
  };

  const handleOpenContainer = () => {
    setIsContainerOpen(!isContainerOpen);
  };

  return (
    <Box sx={containerProps}>
      <Grid container sx={{ height: "100%" }}>
        <Grid item xs={11} sx={contentContainerProps}>
          {content}
        </Grid>
        <Grid item xs={1}>
          <Box sx={stickerContainerProps}>
            <IconButton sx={iconProps} onClick={handleOpenContainer}>
              {icon}
            </IconButton>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
