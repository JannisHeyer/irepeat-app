import React from "react";
import GlobalStyles from "../styles/globalStyles";
import { vocabularyList } from "../data/vocabularyList";
import { useLocalStorageState } from "../utils/localStorage";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const [category, setCategory] = useState();
  const [vocabularies, setVocabularies] = useLocalStorageState(
    "vocabularies",
    vocabularyList
  );

  return (
    <>
      <GlobalStyles />
      <Component
        category={category}
        setCategory={setCategory}
        vocabularies={vocabularies}
        setVocabularies={setVocabularies}
        {...pageProps}
      />
    </>
  );
}

export default MyApp;
