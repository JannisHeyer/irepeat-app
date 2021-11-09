import { Navbar } from "../components/Navbar";
import { Header } from "../components/Header";
import styled from "styled-components";
import ReactStars from "react-stars";
import { useState } from "react";

const CreateCard = () => {
  const [formInput, setFormInput] = useState();
  const handleOnSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <Header pageTitle="Add a card" />
      <StyledCardContainer onSubmit={handleOnSubmit}>
        <label htmlFor="inputWord">Word:</label>
        <input
          type="text"
          placeholder="German word"
          id="inputWord"
          name="inputWord"
        />
        <label htmlFor="inputTranslation">Translation:</label>
        <input
          type="text"
          placeholder="Translation"
          id="inputTranslation"
          name="inputTranslation"
        />
        <label htmlFor="inputCatergory">Category:</label>
        <input
          type="text"
          placeholder="Category e.g 'Food'"
          id="inputCatergory"
          name="inputCatergory"
        />
        <ReactStars
          count={3}
          size={24}
          color2={"#70abaf"}
          half={false}
          char={"⬤"}
          color1={"#949494"}
        />
      </StyledCardContainer>
      <StyledButton>Submit</StyledButton> <StyledButton>Cancel</StyledButton>
      <Navbar />
    </>
  );
};
export default CreateCard;

const StyledCardContainer = styled.form`
  width: var(--card-width);
  height: var(--card-height);
  margin: var(--card-margin);
  text-align: center;
  background-color: var(--card-bgColor);
  border: var(--card-border);
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
