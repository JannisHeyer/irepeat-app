import {
  motion,
  useMotionValue,
  useTransform,
  useMotionTemplate,
} from "framer-motion";
import React, { useState } from "react";
import Card from "../components/Card";
import inactiveCards from "../data/inactiveCards";

export const CardStack = ({ vocabularies: vocabulariesprop }) => {
  const [vocabularies, setVocabularies] = useState(vocabulariesprop);
  const [inactive, setInactive] = useState(inactiveCards);
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
      // Removes card if the user swipes left and keeps it if they swipe right //
      const lastIndex = vocabularies.length - 1;
      const lastElement = vocabularies[lastIndex];
      function checkInactive(vocabularies) {
        return vocabularies.active === false;
      }
      function checkActive(vocabularies) {
        return vocabularies.active === true;
      }
      if (animation.x < 0) {
        lastElement.active = false;
        const allInactiveCards = vocabularies.filter(checkInactive);
        const allActiveCards = vocabularies.filter(checkActive);
        setVocabularies([...allActiveCards]);
        setInactive([...inactive, ...allInactiveCards]);
      } else {
        const newVocabulary = [
          lastElement,
          ...vocabularies.slice(0, lastIndex),
        ];
        setVocabularies([...newVocabulary]);
      }
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

  const renderCards = () => {
    return vocabularies.map(
      (
        { article, word, wordType, ipa, category, rating, translation, active },
        index
      ) => {
        if (index === vocabularies.length - 1) {
          return (
            <Card
              active={active}
              key={word}
              word={word}
              article={article}
              wordType={wordType}
              ipa={ipa}
              category={category}
              rating={rating}
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
              article={article}
              wordType={wordType}
              ipa={ipa}
              category={category}
              rating={rating}
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
  return renderCards();
};
export default CardStack;
