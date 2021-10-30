import styled from "styled-components";
import { Navbar } from "../components/Navbar";
import { Header } from "../components/Header";
import Card from "../components/Card";
import { vocabularies } from "../components/Vocabularies";

export default function Home() {
  return (
    <>
      <StyledMainHeader>
        <Header pageTitle="iRepeat" />
      </StyledMainHeader>
      <main>
        {vocabularies.map(
          ({ id, article, word, wordType, ipa, category, rating }) => (
            <Card
              key={id}
              word={word}
              article={article}
              wordType={wordType}
              ipa={ipa}
              category={category}
              rating={rating}
            />
          )
        )}
      </main>
      <Navbar />
    </>
  );
}

/// Styles ///

const StyledMainHeader = styled.div`
  & ::first-letter {
    color: var(--main-color);
    z-index: 1;
  }
`;
