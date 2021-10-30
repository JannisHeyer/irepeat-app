import styled from "styled-components";

export const Header = ({ pageTitle }) => {
  return <StyledHeader>{pageTitle}</StyledHeader>;
};

///STYLES///

const StyledHeader = styled.h1`
  margin: 0;
  padding: 0.8rem;
  width: 100vw;
  text-align: center;
  border-bottom: 1px solid black;
  z-index: 1;
`;
