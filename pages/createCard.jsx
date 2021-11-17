import { Navbar } from "../components/Navbar";
import { Header } from "../components/Header";
import styled from "styled-components";
import { useState } from "react";
import { useForm } from "react-hook-form";
import useFormPersist from "react-hook-form-persist";
import Popup from "reactjs-popup";
import dayjs from "dayjs";

const CreateCard = ({ vocabularies, setVocabularies }) => {
  const { register, handleSubmit, watch, setValue, reset } = useForm();
  useFormPersist("form", { watch, setValue });
  const [newCard, setNewCard] = useState();
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);
  const openModal = () => setOpen(true);

  const onCreate = (newCard) => {
    if (vocabularies.find((card) => card.word === newCard.word)) {
      openModal();
      reset();
    } else {
      setVocabularies([...vocabularies, newCard]);
      reset();
    }
  };

  return (
    <>
      <Header pageTitle="Add a card" />
      <Popup open={open} closeOnDocumentClick onClose={closeModal}>
        <StyledPopup>
          <h3>Note</h3>
          <p>This word is already in your stack!</p>
          <button onClick={closeModal}>Ok!</button>
        </StyledPopup>
      </Popup>
      <StyledCardContainer>
        <label htmlFor="word">German Word:</label>
        <input
          {...register("word", { required: true }, { defaultValue: "" })}
          id="word"
        />
        <label htmlFor="translation">Translation:</label>
        <input
          {...register("translation", { required: true }, { defaultValue: "" })}
          id="translation"
        />
        <label htmlFor="category">Category:</label>
        <input
          {...register("category", { required: true }, { defaultValue: "" })}
          id="category"
        />
      </StyledCardContainer>
      <StyledButton
        onClick={handleSubmit((newCard) => {
          const parsedNewCard = {
            ...newCard,
            grade: 0,
            efactor: 2.5,
            repetition: 0,
            interval: 0,
            dueDate: dayjs(Date.now()).toISOString(),
          };
          setNewCard(parsedNewCard);
          onCreate(parsedNewCard);
        })}
      >
        Submit
      </StyledButton>{" "}
      <StyledButton
        onClick={() => {
          reset();
        }}
      >
        Reset
      </StyledButton>
      <Navbar />
    </>
  );
};
export default CreateCard;

const StyledCardContainer = styled.form`
  z-index: 1;
  width: var(--card-width);
  height: var(--card-height);
  margin: var(--card-margin);
  text-align: center;
  background-color: var(--card-bgColor);
  border: var(--card-border);
`;
const StyledButton = styled.button`
  margin-top: 1rem;
  margin-left: 3.3rem;
  color: white;
  border: none;
  margin-bottom: 2rem;
  background-color: var(--main-color);
  height: var(--button-height);
  width: var(--button-width);
  border-radius: var(--button-border-radius);
`;

const StyledPopup = styled.div`
  position: relative;
  text-align: center;
  height: 50vw;
  width: 50vw;
  position: relative;
  background-color: white;
  border: var(--card-border);
  margin-bottom: 10rem;
  & button {
    color: white;
    margin-top: 1rem;
    border: none;
    background-color: var(--main-color);
    height: var(--button-height);
    width: var(--button-width);
    border-radius: var(--button-border-radius);
  }
`;
