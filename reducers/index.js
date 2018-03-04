import { combineReducers } from 'redux';
import decks from './decks';
import correctAnswers from './correctAnswers';

export default combineReducers({ decks, correctAnswers });
