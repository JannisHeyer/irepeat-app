import { Navbar } from "../components/Navbar";
import { Header } from "../components/Header";
import styled from "styled-components";
import { useState } from "react";
import { useForm } from "react-hook-form";
import useFormPersist from "react-hook-form-persist";
import { useAlert } from "react-alert";

const CreateCard = ({ vocabularies, setVocabularies }) => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm();
  useFormPersist("form", { watch, setValue });
  const [newCard, setNewCard] = useState();
  const alert = useAlert();

  const onCreate = (newCard) => {
    if (vocabularies.find((card) => card.word === newCard.word)) {
      alert.show("Card is already in your stack", { type: "error" });
      reset();
    } else {
      setVocabularies([...vocabularies, newCard]);
      alert.show("Card has been added", { type: "success" });
      reset();
    }
  };

  return (
    <>
      <Header pageTitle="Add a card" />
      <Wrapper>
        <StyledCardContainer>
          <StyledFormContainer>
            {/* ----------Vocabulary--------------- */}
            {errors.word && errors.word.type === "pattern" && (
              <span className="error" role="alert">
                {errors.word.message}
              </span>
            )}

            {errors.word && errors.word.type === "required" && (
              <span className="error" role="alert">
                Vocabulary is required
              </span>
            )}
            {errors.word && errors.word.type === "maxLength" && (
              <span className="error" role="alert">
                Max length exceeded
              </span>
            )}
            <input
              autoComplete="off"
              min="1"
              max="50"
              aria-invalid={errors.word ? "true" : "false"}
              placeholder="Vocabulary..."
              {...register(
                "word",
                {
                  required: true,
                  maxLength: 15,
                  minLength: 1,
                  pattern: {
                    value: /^[A-Za-z]+$/i,
                    message: "Invalid Input.",
                  },
                },
                { defaultValue: "" }
              )}
              id="word"
            />
            {/* ----------Translation--------------- */}
            {errors.translation && errors.translation.type === "pattern" && (
              <span className="error" role="alert">
                {errors.translation.message}
              </span>
            )}
            {errors.translation && errors.translation.type === "required" && (
              <span className="error" role="alert">
                Translation is required
              </span>
            )}
            {errors.translation && errors.translation.type === "maxLength" && (
              <span className="error" role="alert">
                Max length exceeded
              </span>
            )}

            <input
              autoComplete="off"
              placeholder="Trabslation..."
              {...register(
                "translation",
                {
                  required: true,
                  maxLength: 15,
                  minLength: 1,
                  pattern: {
                    value: /^[A-Za-z]+$/i,
                    message: "Invalid Input.",
                  },
                },
                { defaultValue: "" }
              )}
              id="translation"
            />
            {/* ----------Category--------------- */}
            {errors.category && errors.category.type === "required" && (
              <span className="error" role="alert">
                {errors.category.message}
              </span>
            )}
            {errors.category && errors.category.type === "required" && (
              <span className="error" role="alert">
                Category is required
              </span>
            )}
            {errors.category && errors.category.type === "maxLength" && (
              <span className="error" role="alert">
                Max length exceeded
              </span>
            )}
            <input
              autoComplete="off"
              placeholder="Category..."
              {...register(
                "category",
                {
                  required: true,
                  maxLength: 15,
                  minLength: 1,
                  pattern: {
                    value: /^[A-Za-z]+$/i,
                    message: "Invalid Input.",
                  },
                },
                { defaultValue: "" }
              )}
              id="category"
            />
            {/* ----------Note--------------- */}
            {errors.note && errors.note.type === "maxLength" && (
              <div className="error" role="alert">
                Max length exceeded
              </div>
            )}
            <input
              placeholder="Optional note..."
              {...register("note", {
                required: false,
                maxLength: 15,
              })}
              id="note"
            />

            <p>Create your own card which will be displayed in your stack</p>
            <ButtonWrapper>
              <StyledButton
                onClick={handleSubmit((newCard) => {
                  const parsedNewCard = {
                    ...newCard,
                    grade: 0,
                    efactor: 2.5,
                    repetition: 0,
                    interval: 0,
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
            </ButtonWrapper>
          </StyledFormContainer>
        </StyledCardContainer>
      </Wrapper>
      <Navbar />
    </>
  );
};
export default CreateCard;
const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const StyledCardContainer = styled.form`
  padding: 2rem;
  align-self: center;
  width: var(--card-width);
  height: fit-content;
  margin: var(--card-margin);
  text-align: center;
  background-color: var(--card-bgColor);
  border: var(--card-border);
  box-shadow: rgb(0 0 0 / 20%) 0px 25px 15px -10px;
  .error {
    text-align: center;
    color: #f04419;
  }
`;

const StyledFormContainer = styled.div`
  display: flex;
  flex-direction: column;

  input {
    margin: 0 0 5% 0;
    border: 1px solid var(--main-color);
  }
`;
const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 10%;
  justify-content: space-between;
`;
const StyledButton = styled.button`
  color: white;
  background-color: var(--main-color);
  height: var(--button-height);
  width: var(--button-width);
  border-radius: var(--button-border-radius);
`;
