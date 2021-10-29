import styled from "styled-components";

export const Header = ({ pageTitle }) => {
  return <StyledHeader>{pageTitle}</StyledHeader>;
};

///STYLES///

const StyledHeader = styled.h1`
  left: 0;
  margin: 0;
  padding: 0;
  width: 100vw;
  text-align: center;
  border-bottom: 1px solid black;
`;
