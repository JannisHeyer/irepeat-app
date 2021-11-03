import styled from "styled-components";
import Link from "next/link";

export const Navbar = () => {
  return (
    <StyledNavContainer>
      <ul>
        <li>
          <Link href="/">
            <a>
              <img src="/Icons/MainCueCard-Black.svg" alt="Main Icon" />
            </a>
          </Link>
        </li>
        <li>
          <Link href="/createCard">
            <a>
              <img src="/Icons/AddCard-Black.svg" alt="Main Icon" />
            </a>
          </Link>
        </li>
        <li>
          <Link href="/categories">
            <a>
              {" "}
              <img src="/Icons/Categories-Black.svg" alt="Main Icon" />
            </a>
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
