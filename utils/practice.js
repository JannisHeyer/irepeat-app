import { supermemo } from 'supermemo';

function practice(card, grade) {
  const { interval, repetition, efactor } = supermemo(card, grade);
  return {
    ...card,
    active: interval > 1 ? false : true,
    interval,
    repetition,
    efactor,
  };
}

export function getNewCardsAfterPracticingBottomCard(cardStack, grade) {
  // copy the card stack so we can tinker with it freely
  // note: this is a shallow copy. The single cards still point to the same
  // memory as they did before.
  const newCardStack = [...cardStack];

  // get the last (bottom) card and remove it from the new card stack and
  // apply the practice function. The practice function creates a copy.
  const practicedCard = practice(newCardStack.pop(), grade);

  // get the card after the card hat was just practised to make sure it stays
  // the next card and there is no visual glitch.
  const nextCard = newCardStack.pop();

  // put the practiced card back _under_ the new card stack
  // (it should have a new efactor value)
  newCardStack.unshift(practicedCard);

  // sort the new card stack by it's interval and its efactor value,
  // both in descending order
  newCardStack.sort((a, b) => b.interval - a.interval || b.efactor - a.efactor);

  // put the next card back on top
  newCardStack.push(nextCard);

  return newCardStack;
}
