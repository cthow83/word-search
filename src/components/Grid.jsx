import React from "react";
import styled from "styled-components";
import generateRandomLetters from "../helpers/generate-random-letters";

const GridTable = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
`;

const GridCell = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  width: 20px;
  height: 20px;
`;

const randomLetters = generateRandomLetters();

const Grid = () => {
  return (
    <GridTable>
      {randomLetters.map((letter, index) => (
        <GridCell key={index}>{letter}</GridCell>
      ))}
    </GridTable>
  );
};

export default Grid;
