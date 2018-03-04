export const LOAD_DECKS = 'LOAD_DECKS';
export const ADD_DECK = 'ADD_DECK';
export const ADD_QUESTION = 'ADD_QUESTION';

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
