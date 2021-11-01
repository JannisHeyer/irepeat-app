import styled from "styled-components";
import { Navbar } from "../components/Navbar";
import { Header } from "../components/Header";
import Card from "../components/Card";
import { vocabularies } from "../components/vocabularies";

export default function Home() {
  return (
    <>
      <Header pageTitle="iRepeat" isMainTitle />

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
