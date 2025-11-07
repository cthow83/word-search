import { wordList } from "../helpers/wordsearch-generators";
import styled from "styled-components";

const WordListWrapper = styled.ul`
  list-style-type: none;
  padding-left: 0;
  column-count: 2;
  border: 1px solid black;
  line-height: 2;
`;

// go through each word and create a list of words
const WordList = () => {
  const words = wordList();
  return (
    <div>
      <h2>Word List</h2>
      <WordListWrapper>
        {words.map((word, index) => (
          <li key={index}>{word}</li>
        ))}
      </WordListWrapper>
    </div>
  );
};

export default WordList;
