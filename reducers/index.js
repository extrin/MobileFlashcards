import { LOAD_DECKS, ADD_DECK, ADD_QUESTION } from '../actions';

export function decks(state = {}, action) {
  switch (action.type) {
    case LOAD_DECKS:
      return {
        ...state,
        ...action.decks
      };
    case ADD_DECK:
      return {
        ...state,
        [action.title]: { title: action.title, questions: [] }
      };
    case ADD_QUESTION:
      return {
        ...state,
        [action.deckTitle]: {
          ...[action.deckTitle],
          questions: questions.concat([
            { question: action.question, answer: action.answer }
          ])
        }
      };
  }
}
