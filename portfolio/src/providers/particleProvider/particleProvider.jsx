import React, { useMemo, useState } from "react";
import { ParticleContext } from "./particleContext";

export default function ParticleProvider({ children }) {
  const [list, setList] = useState([]);

  const props = useMemo(
    () => ({
      list: list,
      setList: setList,
    }),
    [list]
  );

  return (
    <ParticleContext.Provider value={props}>
      {children}
    </ParticleContext.Provider>
  );
}
