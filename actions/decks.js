import { LOAD_DECKS, ADD_DECK, ADD_QUESTION } from './index';

export function loadDecks(decks) {
  return {
    type: LOAD_DECKS,
    decks
  };
}

export function addDeck(title) {
  return {
    type: ADD_DECK,
    title
  };
}

export function addQuestion(deckTitle, question, answer) {
  return {
    type: ADD_QUESTION,
    deckTitle,
    question,
    answer
  };
}
