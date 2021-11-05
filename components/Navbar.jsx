import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

export const Navbar = () => {
  return (
    <StyledNavContainer>
      <ul>
        <li>
          <Link href="/">
            <Image
              className="navIcons"
              src="/Icons/AddCard-Black.svg"
              width={60}
              height={60}
              alt="Home icon liking to the main page"
            />
          </Link>
        </li>
        <li>
          <Link href="/createCard">
            <Image
              src="/Icons/AddCard-Black.svg"
              width={60}
              height={60}
              alt="Icon linking to the create a card section"
            />
          </Link>
        </li>
        <li>
          <Link href="/categories">
            <Image
              src="/Icons/Categories-Black.svg"
              width={60}
              height={60}
              alt="Icon that links to the category section"
            />
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
    & Image {
      margin: 0.5rem 1rem 0.5rem 1rem;
    }
  }
`;
