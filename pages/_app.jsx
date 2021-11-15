import React from "react";
import GlobalStyles from "../styles/globalStyles";
import { vocabularyList } from "../data/vocabularyList";
import { useLocalStorageState } from "../utils/localStorage";

function MyApp({ Component, pageProps }) {
  const [vocabularies, setVocabularies] = useLocalStorageState(
    "vocabularies",
    vocabularyList
  );

  return (
    <>
      <GlobalStyles />
      <Component
        vocabularies={vocabularies}
        setVocabularies={setVocabularies}
        {...pageProps}
      />
    </>
  );
}

export default MyApp;
