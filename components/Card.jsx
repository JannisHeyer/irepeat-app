import styled from "styled-components";
import { motion } from "framer-motion";
import { useState } from "react";

const variants = {
  front: { rotateY: 0 },
  back: { rotateY: 180 },
};

export const Card = ({
  word,
  category,
  translation,
  style,
  onDirectionLock,
  animate,
  onDragEnd,
  note,
  note2,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <>
      <StyledSwiper
        drag
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        dragDirectionLock
        onDirectionLock={onDirectionLock}
        onDragEnd={(e, info) => {
          setIsFlipped(false);
          onDragEnd(e, info);
        }}
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
              <h1>{word}</h1>
              <p>
                <span>Category:</span> {category}
              </p>
              <p>
                <span>Your note: </span>
                {note}
              </p>
              <StyledButton
                className="frontButton"
                onClick={() => setIsFlipped((isFlipped) => !isFlipped)}
              >
                Translation
              </StyledButton>
            </StyledCardContainer>
          ) : (
            <StyledCardContainer className="cardBack">
              <h1>{translation}</h1>
              <p>
                <span>Your note: </span>
                {note2}
              </p>
              <StyledButton
                className="backButton"
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

const StyledSwiper = styled(motion.div)`
  position: absolute;
  width: var(--card-width);
  height: var(--card-height);
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
  text-align: center;
  transform-style: preserve-3d;
  border-radius: 7px;
  background-color: var(--card-bgColor);
  border: var(--card-border);

  & h1 {
    text-align: center;
  }

  & li {
    color: black;
    float: left;
  }

  &.cardBack {
    transform: rotateY(180deg);

    & h2 {
      margin-bottom: 3rem;
    }
    & h3 {
      margin-bottom: 0;
    }
  }
  & span {
    color: var(--main-color);
  }
  .backButton {
    position: relative;
    top: 4.2rem;
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
