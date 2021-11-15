import { Navbar } from "../components/Navbar";
import { Header } from "../components/Header";
import CardStack from "../components/CardStack";

export default function Home({ vocabularies, setVocabularies }) {
  return (
    <>
      <Header pageTitle="iRepeat" isMainTitle />
      <main>
        <CardStack
          vocabularies={vocabularies}
          setVocabularies={setVocabularies}
        />
      </main>
      <Navbar />
    </>
  );
}
