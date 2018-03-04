import {
  INCREMENT_CORRECT_ANSWERS,
  NULL_CORRECT_ANSWERS
} from '../actions/index';

function correctAnswers(state = 0, action) {
  switch (action.type) {
    case INCREMENT_CORRECT_ANSWERS:
      return state + 1;
    case NULL_CORRECT_ANSWERS:
      return 0;
    default:
      return state;
  }
}

export default correctAnswers;
