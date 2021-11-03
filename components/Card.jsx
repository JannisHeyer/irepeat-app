import styled from "styled-components";
import { motion } from "framer-motion";
import { useState } from "react";

const variants = {
  front: { rotateY: 0 },
  back: { rotateY: 180 },
};

export const Card = ({
  article,
  word,
  wordType,
  ipa,
  category,
  translation,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <>
      <StyledMotionDiv
        animate={isFlipped ? "back" : "front"}
        variants={variants}
      >
        {!isFlipped ? (
          <StyledCardContainer>
            <h2>{article}</h2>
            <h1>{word}</h1>
            <p>{wordType}</p>
            <p>{ipa}</p>
            <h5>Category:</h5>
            <p>{category}</p>
            <p>-Rating-</p>
            <StyledButton>Got it!</StyledButton>{" "}
            <StyledButton>Repeat!</StyledButton>
            <StyledButton
              onClick={() => setIsFlipped((isFlipped) => !isFlipped)}
            >
              Translation
            </StyledButton>
          </StyledCardContainer>
        ) : (
          <StyledCardContainer className="cardBack">
            <h2>Translation:</h2>
            <h3>{translation}</h3>
            <StyledButton>Got it!</StyledButton>{" "}
            <StyledButton>Repeat!</StyledButton>
            <StyledButton
              onClick={() => setIsFlipped((isFlipped) => !isFlipped)}
            >
              Back!
            </StyledButton>
          </StyledCardContainer>
        )}
      </StyledMotionDiv>
    </>
  );
};

export default Card;

const StyledMotionDiv = styled(motion.div)`
  width: var(--card-width);
  height: var(--card-height);
  margin: var(--card-margin);
  background-color: transparent;
  position: relative;
  perspective: 1000px;
`;

const StyledCardContainer = styled.div`
  position: absolute;
  top: 0;
  text-align: center;
  transform-style: preserve-3d;
  background-color: var(--card-bgColor);
  border: var(--card-border);

  & li {
    float: left;
  }

  &.cardBack {
    transform: rotateY(180deg);
    & h2 {
      margin-bottom: 3rem;
    }
    & h3 {
      margin-bottom: 11.97rem;
    }
  }
`;

const StyledButton = styled.button`
  color: white;
  border: none;
  margin-bottom: 2rem;
  background-color: var(--main-color);
  height: var(--button-height);
  width: var(--button-width);
  border-radius: var(--button-border-radius);
`;
