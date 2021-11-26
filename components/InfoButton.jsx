import Popup from "reactjs-popup";
import styled from "styled-components";
import { useState } from "react";
import "animate.css";
import InfoIcon from "./images/infoIcon.svg";
import SwipeIcon from "./images/swipe-arrow.svg";

export const InfoButton = () => {
  const [fadeInActive, setFadeInActive] = useState("");
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);
  const openModal = () => setOpen(true);

  const handleFadeOut = () => {
    setFadeInActive("animate__animated animate__fadeOut");
    setTimeout(() => {
      closeModal();
    }, 1000);
  };

  return (
    <>
      <StyledWrapper>
        <StyledIcon className="animate__animated animate__rubberBand animate__delay-5s">
          <InfoIcon
            onClick={() => {
              openModal(), setFadeInActive("animate__animated animate__fadeIn");
            }}
            src="/icons/infoIcon.svg"
            alt="Icon that provides infos on click"
            width={30}
            height={30}
          />
        </StyledIcon>
        <Popup open={open} closeOnDocumentClick onClose={closeModal}>
          <StyledPopup className={fadeInActive}>
            <h3>First you repeat then you succeed</h3>
            <p>
              Swipe right if you got the card right but want to keep practicing
              it. Swipe left if you got the card wrong. Based on your
              performance cards will appear more often or less frequently in
              your stack. Get a card right multiple times in a row and it will
              be removed from the stack automatically.
            </p>
            <button onClick={handleFadeOut}>Got it!</button>
            <SwipeRight className="animate__animated animate__shakeX animate__infinite">
              <SwipeIcon
                src="/icons/swipe-arrow.svg"
                alt="Icon that provides infos on click"
                width={60}
                height={60}
              />
            </SwipeRight>
          </StyledPopup>
        </Popup>
      </StyledWrapper>
    </>
  );
};
export default InfoButton;

const StyledPopup = styled.div`
  padding: 1rem;
  top: 10vw;
  position: relative;
  text-align: center;
  height: 50vh;
  width: 80vw;
  position: relative;
  background-color: white;
  border: var(--card-border);
  margin-bottom: 10rem;
  & button {
    color: white;
    margin-top: 1rem;
    background-color: var(--main-color);
    height: var(--button-height);
    width: var(--button-width);
    border-radius: var(--button-border-radius);
  }
`;
const StyledIcon = styled.div`
  display: flex;
`;
const StyledWrapper = styled.div`
  position: fixed;
  z-index: 2;
`;
const SwipeRight = styled.div`
  position: absolute;
  bottom: -30%;
  left: 40%;
  animation-duration: 5s;
`;
