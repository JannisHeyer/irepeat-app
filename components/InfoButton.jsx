import Popup from "reactjs-popup";
import styled from "styled-components";
import { useState } from "react";
import Image from "next/image";

export const InfoButton = () => {
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);
  const openModal = () => setOpen(true);
  return (
    <>
      <StyledWrapper>
        <StyledIcon>
          <Image
            onClick={openModal}
            src="/icons/infoIcon.svg"
            alt="Icon that provides infos on click"
            width={30}
            height={30}
          />
        </StyledIcon>
        <Popup open={open} closeOnDocumentClick onClose={closeModal}>
          <StyledPopup>
            <h3>First you repeat then you succeed</h3>
            <p>
              Swipe right if you got the card right but want to keep practicing
              it. Swipe left if you got the card wrong. Based on your
              performance cards will appear more often or less frequently in
              your stack. Get a card right multiple times in a row and it will
              be removed from the stack automatically.
            </p>
            <button onClick={closeModal}>Got it!</button>
          </StyledPopup>
        </Popup>
      </StyledWrapper>
    </>
  );
};
export default InfoButton;

const StyledPopup = styled.div`
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
