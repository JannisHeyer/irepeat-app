import { useMotionValue, useTransform, useMotionTemplate } from "framer-motion";
import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import EndCard from "../components/EndCard";
import { getNewCardsAfterPracticingBottomCard } from "../utils/practice";

export const CardStack = ({ vocabularies, setVocabularies }) => {
  const [dragStart, setDragStart] = useState({
    axis: null,
    animation: { x: 0, y: 0 },
  });
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const scale = useTransform(
    dragStart.axis === "x" ? x : y,
    [-175, 0, 175],
    [1, 0.5, 1]
  );
  const shadowBlur = useTransform(
    dragStart.axis === "x" ? x : y,
    [-175, 0, 175],
    [0, 25, 0]
  );
  const shadowOpacity = useTransform(
    dragStart.axis === "x" ? x : y,
    [-175, 0, 175],
    [0, 0.2, 0]
  );
  const boxShadow = useMotionTemplate`0 ${shadowBlur}px 15px -10px rgba(0, 0, 0, ${shadowOpacity})`;
  const onDirectionLock = (axis) => setDragStart({ ...dragStart, axis: axis });
  const animateCardSwipe = (animation) => {
    setDragStart({ ...dragStart, animation });

    setTimeout(() => {
      setDragStart({ axis: null, animation: { x: 0, y: 0 } });
      x.set(0);
      y.set(0);

      const didDragLeft = animation.x < 0;

      const grade = didDragLeft ? 1 : 5;

      console.log({ didDragLeft, grade });

      setVocabularies((vocabularies) =>
        getNewCardsAfterPracticingBottomCard(vocabularies, grade)
      );
    }, 200);
  };

  const onDragEnd = (info) => {
    if (dragStart.axis === "x") {
      if (info.offset.x >= 200) animateCardSwipe({ x: 275, y: 0 });
      else if (info.offset.x <= -200) animateCardSwipe({ x: -275, y: 0 });
    } else {
      if (info.offset.y >= 200) animateCardSwipe({ x: 0, y: 275 });
      else if (info.offset.y <= -200) animateCardSwipe({ x: 0, y: -275 });
    }
  };

  const handleReset = () => {
    setVocabularies((vocabularies) =>
      vocabularies
        .map((card) => ({
          ...card,
          interval: 0,
          repetition: 0,
          active: true,
        }))
        .sort((a, b) => b.efactor - a.efactor)
    );
  };

  useEffect(() => {
    console.table(vocabularies);
  }, [vocabularies]);

  const filteredVocabularies = vocabularies.filter(({ active }) => active);

  if (filteredVocabularies.length === 0) {
    return <EndCard onReset={handleReset} />;
  }
  return filteredVocabularies.map(
    ({ note, word, category, translation, active }, index) => {
      if (index === filteredVocabularies.length - 1) {
        return (
          <Card
            active={active}
            key={word}
            word={word}
            note={note}
            category={category}
            translation={translation}
            style={{ x, y, zIndex: index }}
            onDirectionLock={(axis) => onDirectionLock(axis)}
            onDragEnd={(e, info) => onDragEnd(info)}
            animate={dragStart.animation}
          />
        );
      } else
        return (
          <Card
            active={active}
            key={word}
            word={word}
            note={note}
            category={category}
            translation={translation}
            style={{
              scale,
              boxShadow,
              zIndex: index,
            }}
          />
        );
    }
  );
};
export default CardStack;
