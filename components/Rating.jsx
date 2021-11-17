import { useForm } from "react-hook-form";
import styled from "styled-components";
import { useState } from "react";

export const Rating = ({ vocabularies, setVocabularies, word }) => {
  const { register, handleSubmit } = useForm();
  const [grade, setGrade] = useState();

  return (
    <>
      <form action="">
        <label htmlFor="0">0</label>
        <input type="radio" value="0" {...register("grade")} id="0" />
        <label htmlFor="1">1</label>
        <input type="radio" value="1" {...register("grade")} id="1" />
        <label htmlFor="2">2</label>
        <input type="radio" value="2" {...register("grade")} id="2" />
        <label htmlFor="0">3</label>
        <input type="radio" value="3" {...register("grade")} id="3" />
        <label htmlFor="4">4</label>
        <input type="radio" value="4" {...register("grade")} id="4" />
        <label htmlFor="5">5</label>
        <input type="radio" value="5" {...register("grade")} id="5" />
        <button
          onClick={handleSubmit(({ word }) => {
            console.log(word);
            const index = vocabularies.findIndex(
              (vocable) => vocable.word === word
            );

            const front = vocabularies.slice(0, index);

            const back = vocabularies.slice(
              index + 1,
              vocabularies.length - index + 1
            );

            setVocabularies([
              ...front,
              {
                ...vocabularies[index],
                grade: parseInt(card.grade),
              },
              ...back,
            ]);
          })}

          //const parsedNewCard = { ...vocabularies, grade: parseInt(newCard.grade) }
        >
          Confirm
        </button>
      </form>
    </>
  );
};
export default Rating;
const StyledRating = styled.form`
  display: flex;
  flex-direction: row;
`;
