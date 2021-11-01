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
          <StyledButton>Translation</StyledButton>
          <div>
            <p>-Rating-</p>
          </div>
          <StyledButton>Got it!</StyledButton>{" "}
          <StyledButton>Repeat!</StyledButton>
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
  border: 1px solid var(--main-color);
  & li {
    float: left;
  }
`;
const StyledButton = styled.button`
  color: white;
  border: none;
  background-color: var(--main-color);
  height: var(--button-height);
  width: var(--button-width);
  border-radius: var(--button-border-radius);
  margin-bottom: 2rem;
`;
