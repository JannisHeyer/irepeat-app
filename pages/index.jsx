import styled from "styled-components";
import { Navbar } from "../components/Navbar";
import { Header } from "../components/Header";

export default function Home() {
  return (
    <>
      <StyledMainHeader>
        <Header pageTitle="iRepeat" />
      </StyledMainHeader>
      <main>
        <p>Work in progress...</p>
      </main>
      <Navbar />
    </>
  );
}
const StyledMainHeader = styled.div`
  &::first-letter {
    color: var(--main-color);
    z-index: 1;
  }
`;
