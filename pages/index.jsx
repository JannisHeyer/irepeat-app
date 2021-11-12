import { Navbar } from "../components/Navbar";
import { Header } from "../components/Header";

import { vocabularies } from "../data/vocabularies";
import CardStack from "../components/CardStack";

export default function Home() {
  return (
    <>
      <Header pageTitle="iRepeat" isMainTitle />

      <main>
        <CardStack vocabularies={vocabularies} />
      </main>
      <Navbar />
    </>
  );
}
