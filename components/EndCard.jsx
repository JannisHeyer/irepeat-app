import Link from "next/link";
import styled from "styled-components";
import "animate.css";

export const EndCard = ({ onReset }) => {
  return (
    <StyledCardContainer>
      <h3 className="animate__animated animate__rubberBand">
        Congratulations 🎉
      </h3>
      <p>Awsome! You have completed your current stack of cards.</p>
      <StyledWrapper>
        <button>
          <Link href="/createCard">
            <p>Add cards</p>
          </Link>
        </button>

        <button
          onClick={() => {
            onReset();
          }}
        >
          Continue learning
        </button>
      </StyledWrapper>
    </StyledCardContainer>
  );
};
export default EndCard;

const StyledCardContainer = styled.div`
  width: var(--card-width);
  height: var(--card-height);
  margin: var(--card-margin);
  position: absolute;
  top: var(--card-position-top);
  left: var(--card-position-left);
  text-align: center;
  transform-style: preserve-3d;
  background-color: var(--card-bgColor);
  border: var(--card-border);
  box-shadow: rgb(0 0 0 / 20%) 0px 25px 15px -10px;
  & h3 {
    margin-top: 3rem;
  }
  & p {
    margin-top: 3rem;
  }
`;
const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  & button {
    margin: 0.5rem;
    margin-top: 3rem;
    color: white;
    border: none;
    background-color: var(--main-color);
    height: var(--button-height);
    width: var(--button-width);
    border-radius: var(--button-border-radius);
    & p {
      all: unset;
    }
  }
`;
