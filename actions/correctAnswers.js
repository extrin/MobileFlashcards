import { INCREMENT_CORRECT_ANSWERS, NULL_CORRECT_ANSWERS } from './index';

export function incrementCorrectAnswers() {
  return {
    type: INCREMENT_CORRECT_ANSWERS
  };
}

export function nullCorrectAnswers() {
  return { type: NULL_CORRECT_ANSWERS };
}
