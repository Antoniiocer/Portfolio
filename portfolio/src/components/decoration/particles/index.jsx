import { ParticleContext } from "../../../providers/particleProvider/particleContext";
import { useEffect, useContext } from "react";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import { useTheme } from "@mui/material";
import particleGenerator from "../../../functions/particleGenerator";

export default function Particles() {
  const theme = useTheme();
  const { list, setList } = useContext(ParticleContext);
  const { width, height } = useWindowDimensions();

  useEffect(() => {
    const colors = [
      theme.palette.primary.main,
      theme.palette.info.main,
      theme.palette.error.main,
      theme.palette.warning.main,
    ];
    const interval = setInterval(() => {
      particleGenerator(height, width, colors, setList);
    }, 200);

    return () => clearInterval(interval);
  }, [height, width, setList, theme]);

  return list.map((particle) => particle.component);
}
