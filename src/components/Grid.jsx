import React from "react";
import styled from "styled-components";
import { generateStaticLetters } from "../helpers/wordsearch-generators";

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

const staticLetters = generateStaticLetters();

const Grid = () => {
  return (
    <GridTable>
      {staticLetters.map((letter, index) => (
        <GridCell key={index}>{letter}</GridCell>
      ))}
    </GridTable>
  );
};

export default Grid;
