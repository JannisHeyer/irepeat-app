import styled from "styled-components";

export const Header = ({ pageTitle }) => {
  return <StyledHeader>{pageTitle}</StyledHeader>;
};

///STYLES///

const StyledHeader = styled.h1`
  top: 0;
  margin: 0;
  padding: 0.8rem;
  width: 100vw;
  text-align: center;
  border-bottom: 1px solid black;
  position: fixed;
  z-index: 1;
  background-color: white;
  /* & ::first-letter {
    color: var(--main-color);
    z-index: 1;
  } */
`;
