import React from "react";
import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import theme from "./theme";
import "./App.css";
import Decoration from "./components/decoration";
import Content from "./components/content";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ m: 0, width: "100%", height: "100%" }}>
        <Decoration />
        <Content />
      </Box>
    </ThemeProvider>
  );
}

export default App;
