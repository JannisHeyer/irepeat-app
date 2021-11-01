import styled from "styled-components";

export const Card = ({ article, word, wordType, ipa, category }) => {
  return (
    <>
      <StyledCardContainer>
        <div>
          <h2>{article}</h2>
          <h1>{word}</h1>
          <p>{wordType}</p>
          <p>{ipa}</p>
          <h5>Category:</h5>
          <p>{category}</p>
          <button>Translation</button>
          <div>
            <p>-Rating-</p>
          </div>
          <button>Got it!</button> <button>Repeat!</button>
        </div>
      </StyledCardContainer>
    </>
  );
};

export default Card;

const StyledCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 5rem 3rem 0rem 3rem;
  text-align: center;
  border: 1px solid black;
  & li {
    float: left;
  }
`;
