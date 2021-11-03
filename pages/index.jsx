import { Navbar } from "../components/Navbar";
import { Header } from "../components/Header";
import Card from "../components/Card";
import { vocabularies } from "../data/vocabularies";

export default function Home() {
  return (
    <>
      <Header pageTitle="iRepeat" isMainTitle />

      <main>
        {vocabularies.map(
          ({ article, word, wordType, ipa, category, rating, translation }) => (
            <Card
              key={word}
              word={word}
              article={article}
              wordType={wordType}
              ipa={ipa}
              category={category}
              rating={rating}
              translation={translation}
            />
          )
        )}
      </main>
      <Navbar />
    </>
  );
}
