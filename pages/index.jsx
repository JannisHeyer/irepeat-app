import { Navbar } from "../components/Navbar";
import { Header } from "../components/Header";
import CardStack from "../components/CardStack";
import { getCards } from "../utils/getCards";

export default function Home({ vocabularies, setVocabularies, cards }) {
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
/* --------------------------
  provide Server side props:
-------------------------- */

export async function getStaticProps() {
  const res = await getCards();
  const cards = await JSON.parse(JSON.stringify(res));
  if (!cards) {
    console.log("failed to fetch card Data");
    return {
      notFound: true,
    };
  }

  console.table("in getStaticProps", cards);
  return {
    props: { cards },
  };
}
