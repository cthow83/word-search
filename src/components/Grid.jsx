import styled from "styled-components";
import { generateWordSearch, wordList } from "../helpers/wordsearch-generators";

const GridTable = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  max-width: 350px;
  @media (min-width: 600px) {
    max-width: 1000px;
  }
`;

const GridCell = styled.div.attrs({ role: "gridcell" })`
  border: 1px solid black;
  padding: 4px;
  width: 17px;
  height: 17px;
  font-size: 12px;
  @media (min-width: 600px) {
    width: 20px;
    height: 20px;
    padding: 10px;
    font-size: 16px;
  }
`;

const Grid = () => {
  const randomLetters = generateWordSearch(wordList(), 12);
  return (
    <GridTable>
      {randomLetters.map((letter, index) => (
        <GridCell key={index}>{letter}</GridCell>
      ))}
    </GridTable>
  );
};

export default Grid;
