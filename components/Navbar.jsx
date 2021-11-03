import styled from "styled-components";
import Link from "next/link";

export const Navbar = () => {
  return (
    <StyledNavContainer>
      <ul>
        <li>
          <Link href="/">
            <img src="/Icons/MainCueCard-Black.svg" alt="Main Icon" />
          </Link>
        </li>
        <li>
          <Link href="/components/CreateCard">
            <img src="/Icons/AddCard-Black.svg" alt="Main Icon" />
          </Link>
        </li>
        <li>
          <Link href="/components/Categories">
            <img src="/Icons/Categories-Black.svg" alt="Main Icon" />
          </Link>
        </li>
      </ul>
    </StyledNavContainer>
  );
};

/// STYLES ///

const StyledNavContainer = styled.div`
  top: 185vw;
  width: 100vw;
  display: flex;
  justify-content: center;
  position: fixed;
  z-index: 1;
  cursor: pointer;

  & ul {
    background-color: white;
    padding: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    border: 3px solid var(--main-color);
    border-radius: 2rem;
    column-gap: 2rem;

    & li {
      display: flex;
      justify-content: space-around;
    }
    & img {
      height: 4rem;
      width: 4rem;
      margin: 0.5rem 1rem 0.5rem 1rem;
    }
  }
`;
