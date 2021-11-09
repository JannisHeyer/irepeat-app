import styled from "styled-components";
import Link from "next/link";

export const Navbar = () => {
  return (
    <StyledNavContainer>
      <ul>
        <li>
          <Link href="/">
            <a> Home </a>
          </Link>
        </li>
        <li>
          <Link href="/createCard">
            <a> Add a Card</a>
          </Link>
        </li>
        <li>
          <Link href="/categories">
            <a> Categories </a>
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
  }
`;
