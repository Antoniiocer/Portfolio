import { useEffect } from "react";

function writer(text, setTextState, index = 0, showCursor = true) {
  if (text.length > index) {
    setTextState((a) => a.concat(text[index]));
    setTimeout(() => {
      writer(text, setTextState, index + 1);
    }, 150);
  } else {
    setTextState((a) => (showCursor ? a + "_" : a.slice(0, -1)));
    setTimeout(() => {
      writer(text, setTextState, index + 1, !showCursor);
    }, 700);
  }
}

export default function useWriterEffect(text, setTextState) {
  useEffect(() => {
    setTextState("");
    writer(text, setTextState);
  }, []);
}
