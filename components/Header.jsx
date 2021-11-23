import styled from "styled-components";
import InfoButton from "./InfoButton";

export const Header = ({ pageTitle, isMainTitle }) => {
  return (
    <>
      <StyledHeader isMainTitle={isMainTitle}>
        <InfoButton />
        {pageTitle}
      </StyledHeader>
    </>
  );
};

///STYLES///

const StyledHeader = styled.h1`
  top: 0;
  margin: 0;
  padding: 0.8rem;
  width: 100vw;
  text-align: center;
  position: fixed;
  z-index: 1;
  color: black;
  background-color: var(--main-color);
  &::first-letter {
    color: ${(props) => (props.isMainTitle ? "white" : undefined)};
    z-index: 1;
  }
`;
