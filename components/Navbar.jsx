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
      </ul>
    </StyledNavContainer>
  );
};

/// STYLES ///

const StyledNavContainer = styled.div`
  bottom: 0;
  position: fixed;
  margin: 0;
  width: 100vw;
  text-align: center;
  z-index: 1;

  & ul {
    margin: 0;
    background-color: #636363;
    padding: 0;
    display: flex;
    justify-content: space-evenly;

    a {
      color: white;
    }

    .active {
      color: #87c1c5;
    }

    & li {
      padding: 1rem;
      display: flex;
      justify-content: space-around;
    }
  }
`;
