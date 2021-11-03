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
          <StyledCardContainerFront>
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
          </StyledCardContainerFront>
        ) : (
          <StyledCardContainerBack className="cardBack">
            <h2>Translation:</h2>
            <h3>{translation}</h3>
            <StyledButton
              className="buttonBack"
              onClick={() => setIsFlipped((isFlipped) => !isFlipped)}
            >
              Back!
            </StyledButton>
            <StyledButton className="buttonBack">Got it!</StyledButton>{" "}
            <StyledButton className="buttonBack">Repeat!</StyledButton>
          </StyledCardContainerBack>
        )}
      </StyledMotionDiv>
    </>
  );
};

export default Card;
const StyledMotionDiv = styled(motion.div)`
  background-color: transparent;
  //position: relative;
  width: 279px;
  height: 455.13px;
  margin: 5rem 3rem 0rem 3rem;
  perspective: 1000px;
`;

const StyledCardContainerFront = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  border: 1px solid var(--main-color);
  transition: transform 0.8s;
  transform-style: preserve-3d;
  & li {
    float: left;
  }
`;

const StyledCardContainerBack = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  border: 1px solid var(--main-color);
  transform: rotateY(180deg);
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
