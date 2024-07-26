import React, { useState } from "react";
import { Box, Typography, useTheme } from "@mui/material";

import {
  bar1Styles,
  bar2Styles,
  bar3Styles,
  boxStyles,
  titleContainerStyles,
  subtitleContainerStyles,
  topContainerStyles,
  titleStyles,
  titleHeaderStyles,
  captionStyles,
  containerCaptionStyles,
} from "./styles";
import useWriterEffect from "../../../../hooks/useMachineTextSimulator";

export default function Title() {
  const { palette, typography } = useTheme();
  const [text, setText] = useState("");

  useWriterEffect("Frontend Developer", setText);

  return (
    <Box sx={topContainerStyles}>
      <Box sx={titleContainerStyles}>
        <Typography sx={titleHeaderStyles(typography)}>
          Hello, my name is:
        </Typography>
      </Box>
      <Box sx={titleContainerStyles}>
        <Typography sx={titleStyles(typography)}>Antonio Cervantes</Typography>
      </Box>
      <Box sx={subtitleContainerStyles}>
        <Typography sx={{ fontFamily: "'Courier Prime', monospace" }}>
          {text}
        </Typography>
      </Box>
      <Box sx={boxStyles}>
        <Box sx={bar1Styles} />
        <Box sx={bar2Styles} />
        <Box sx={bar3Styles} />
      </Box>
      <Box sx={containerCaptionStyles}>
        <Typography sx={captionStyles(typography, palette.secondary.main)}>
          Focused,
        </Typography>
        <Typography sx={captionStyles(typography, palette.error.main)}>
          Curious,
        </Typography>
        <Typography sx={captionStyles(typography, palette.warning.main)}>
          Enthusiastic
        </Typography>
      </Box>
    </Box>
  );
}
