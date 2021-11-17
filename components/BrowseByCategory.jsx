//import { useState } from "react";

export const BrowseByCategory = ({ vocabularies, setVocabulary }) => {
  return vocabularies.map(({ category }) => {
    <button> {category}</button>;
  });
};
export default BrowseByCategory;
