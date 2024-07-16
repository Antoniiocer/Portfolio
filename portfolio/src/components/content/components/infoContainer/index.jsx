import React, { useState } from "react";
import { useTheme, Box, Grid, IconButton } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";

export default function InfoContainer() {
  const theme = useTheme();
  const [isContainerOpen, setIsContainerOpen] = useState(false);

  const containerProps = {
    width: "85%",
    m: 0,
    p: 0,
    pt: 5,
    height: "100%",
    position: "relative",
    overflow: "hidden",
  };

  const contentContainerProps = {
    height: "100%",
    backgroundColor: theme.palette.error.dark,
    pr: "10px",
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeInOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: isContainerOpen ? "0%" : "-92%",
  };

  const stickerContainerProps = {
    height: "10%",
    backgroundColor: theme.palette.error.main,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "0 20% 20% 0",
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
  };

  const handleOpenContainer = () => {
    setIsContainerOpen(!isContainerOpen);
  };

  return (
    <Box sx={containerProps}>
      <Grid container sx={{ height: "100%" }}>
        <Grid item xs={11} sx={contentContainerProps}>
          Contenido principal que ocupa el 90% del contenedor.
        </Grid>
        <Grid item xs={1} sx={stickerContainerProps}>
          <IconButton
            aria-label="About me"
            sx={iconProps}
            onClick={handleOpenContainer}
          >
            <InfoIcon sx={{ fontSize: "200%" }} />
          </IconButton>
        </Grid>
      </Grid>
    </Box>
  );
}
