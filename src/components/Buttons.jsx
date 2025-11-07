import styled from "styled-components";

const ButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin: 20px auto;
  font-size: 12px;
  justify-content: center;
  color: teal;
  max-width: 350px;
  flex-wrap: wrap;
  @media print {
    display: none !important;
  }
  @media (min-width: 600px) {
    font-size: 16px;
    max-width: 500px;
  }
`;

const SwapFontButton = ({ swapFont, useDyslexicFont }) => (
  <button onClick={swapFont}>
    {useDyslexicFont ? "Use Default Font" : "Use OpenDyslexic Font"}
  </button>
);

const Buttons = (props) => {
  return (
    <>
      <ButtonWrapper>
        <ShuffleButton reloadGrid={props.reloadGrid} />
        <ChangeBackgroundColorButton
          setBackgroundColor={props.setBackgroundColor}
          setColorIndex={props.setColorIndex}
          colorIndex={props.colorIndex}
        />
        <SwapFontButton
          swapFont={props.swapFont}
          useDyslexicFont={props.useDyslexicFont}
        />
      </ButtonWrapper>
    </>
  );
};

const ShuffleButton = ({ reloadGrid }) => {
  return <button onClick={() => reloadGrid()}>Shuffle</button>;
};

const backgroundColors = [
  "white",
  "#DBE1F0",
  "#ADF090",
  "#D8D3D6",
  "#EDDB76",
  "#ECD0B2",
  "#B68ADA",
  "#E0A6AA",
];

const getNextBackgroundColor = (
  setBackgroundColor,
  setColorIndex,
  colorIndex,
) => {
  let nextIndex = 0;
  if (colorIndex + 1 < backgroundColors.length) {
    nextIndex = colorIndex + 1;
  }
  setColorIndex(nextIndex);
  setBackgroundColor(backgroundColors[nextIndex]);
};

const ChangeBackgroundColorButton = ({
  setBackgroundColor,
  setColorIndex,
  colorIndex,
}) => {
  return (
    <button
      onClick={() =>
        getNextBackgroundColor(setBackgroundColor, setColorIndex, colorIndex)
      }
    >
      Change Background Color
    </button>
  );
};

export default Buttons;
