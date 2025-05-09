import styled from "styled-components";

const StyledHeading = styled.h1`
  font-size: 3.2em;
  line-height: 1.1;
  color: teal;
`;

const Heading = ({ children }) => {
  return <StyledHeading>{children}</StyledHeading>;
};

export default Heading;
