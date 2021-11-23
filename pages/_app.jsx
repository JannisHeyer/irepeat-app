import React from "react";
import { GlobalStyles } from "../styles/globalStyles";
import { vocabularyList } from "../data/vocabularyList";
import { useLocalStorageState } from "../utils/localStorage";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

const options = {
  position: positions.TOP_CENTER,
  timeout: 5000,
  offset: "30px",
  transition: transitions.SCALE,
  SUCCESS: "success",
  ERROR: "error",
};
export const types = {
  INFO: "info",
  SUCCESS: "success",
  ERROR: "error",
};

function MyApp({ Component, pageProps }) {
  const [vocabularies, setVocabularies] = useLocalStorageState(
    "vocabularies",
    vocabularyList
  );

  return (
    <>
      <AlertProvider template={AlertTemplate} {...options}>
        <GlobalStyles />
        <Component
          vocabularies={vocabularies}
          setVocabularies={setVocabularies}
          {...pageProps}
        />
      </AlertProvider>
    </>
  );
}

export default MyApp;
