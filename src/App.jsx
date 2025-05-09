import "./App.css";
import Heading from "./components/Heading";
import Grid from "./components/Grid";
import WordList from "./components/WordList";

function App() {
  return (
    <>
      <Heading>Word Search</Heading>
      <Grid />
      <WordList />
    </>
  );
}

export default App;
