import styled from "styled-components";
import ActiveLink from "./ActiveLink";

export const Navbar = () => {
  return (
    <StyledNavContainer>
      <ul>
        <li>
          <ActiveLink activeClassName="active" href="/">
            <a>Home</a>
          </ActiveLink>
        </li>
        <li>
          <ActiveLink activeClassName="active" href="/createCard">
            <a>Add a Card</a>
          </ActiveLink>
        </li>
        <li>
          <ActiveLink activeClassName="active" href="/categories">
            <a>Categories</a>
          </ActiveLink>
        </li>
      </ul>
    </StyledNavContainer>
  );
};

/// STYLES ///

const StyledNavContainer = styled.div`
  top: 200vw;
  margin: 0;
  padding: 0.8rem;
  width: 100vw;
  text-align: center;
  border-top: 1px solid black;
  position: fixed;
  z-index: 1;
  background-color: white;

  & ul {
    margin: 0;
    background-color: white;
    padding: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    border-radius: 2rem;
    column-gap: 2rem;
    a {
      color: black;
    }

    .active {
      color: var(--main-color);
    }

    & li {
      display: flex;
      justify-content: space-around;
    }
  }
`;
