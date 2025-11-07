import React, { useEffect, useState } from "react";
import "./App.css";
import Heading from "./components/Heading";
import Grid from "./components/Grid";
import WordList from "./components/WordList";
import Buttons from "./components/Buttons";

function App() {
  const [backgroundColor, setBackgroundColor] = useState("white");
  const [colorIndex, setColorIndex] = useState(0);
  const [gridKey, setGridKey] = useState(0);
  const [useDyslexicFont, setUseDyslexicFont] = useState(false);
  useEffect(() => {
    document.body.style.backgroundColor = backgroundColor;
    document.body.style.fontFamily = useDyslexicFont
      ? "OpenDyslexic, Arial, sans-serif"
      : "Arial, sans-serif";
  }, [backgroundColor, useDyslexicFont]);
  const reloadGrid = () => setGridKey((k) => k + 1);
  const swapFont = () => setUseDyslexicFont((prev) => !prev);
  return (
    <>
      <Heading>Word Search</Heading>
      <Grid key={gridKey} />
      <Buttons
        setBackgroundColor={setBackgroundColor}
        colorIndex={colorIndex}
        setColorIndex={setColorIndex}
        reloadGrid={reloadGrid}
        swapFont={swapFont}
        useDyslexicFont={useDyslexicFont}
      />
      <WordList />
    </>
  );
}

export default App;
