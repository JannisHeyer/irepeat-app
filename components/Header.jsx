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
  border-bottom: 1px solid black;
  position: fixed;
  z-index: 1;
  background-color: white;
  &::first-letter {
    color: ${(props) => (props.isMainTitle ? "var(--main-color)" : undefined)};
    z-index: 1;
  }
`;
