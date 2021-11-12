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
  style,
  onDirectionLock,
  animate,
  onDragEnd,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <>
      <StyledSwiper
        drag
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        dragDirectionLock
        onDirectionLock={onDirectionLock}
        onDragEnd={onDragEnd}
        animate={animate}
        style={style}
        transition={{ ease: [0.6, 0.05, -0.01, 0.9] }}
      >
        <StyledFlipper
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
        </StyledFlipper>
      </StyledSwiper>
    </>
  );
};

export default Card;

// FIXME: Boxshadow not showing on first card.
// FIXME: Card changes size on flip(?).

const StyledSwiper = styled(motion.div)`
  position: absolute;
  left: 0px;
  top: 0px;
  width: var(--card-width);
  height: var(--card-height);
  margin: var(--card-margin);
`;

const StyledFlipper = styled(motion.div)`
  width: 100%;
  height: 100%;

  background-color: transparent;
  position: relative;
  perspective: 1000px;
`;

const StyledCardContainer = styled.div`
  width: 100%;
  height: 100%;
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
