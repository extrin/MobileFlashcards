import { LOAD_DECKS, ADD_DECK, ADD_QUESTION } from '../actions';

function decks(state = {}, action) {
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
      const updatedQuestions = state[action.deckTitle].questions.concat({
        question: action.question,
        answer: action.answer
      });
      return {
        ...state,
        [action.deckTitle]: {
          title: action.deckTitle,
          questions: updatedQuestions
        }
      };

    default:
      return state;
  }
}

export default decks;
