import styled from "styled-components";

export const Card = ({ article, word, wordType, ipa, category }) => {
  return (
    <>
      <div>
        <p>{article}</p>
        <h1>{word}</h1>
        <p>{wordType}</p> <p>{ipa}</p>
        <h3>Category:</h3>
        <p>{category}</p>
        <button>Translation</button>
        <div>
          <p>-Rating-</p>
        </div>
        <button>Got it!</button> <button>Repeat!</button>
      </div>
    </>
  );
};

export default Card;
