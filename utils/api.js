import { AsyncStorage } from 'react-native';

const CARDS_STORAGE_KEY = 'MobileFlashcards:decks';

export const addCardToDeck = (deckTitle, question, answer) => {
  const deck = getDeck(deckTitle).then(res => {
    const updatedQuestions = res.questions.concat([
      {
        question: question,
        answer: answer
      }
    ]);
    AsyncStorage.mergeItem(
      CARDS_STORAGE_KEY,
      JSON.stringify({
        [deckTitle]: { title: deckTitle, questions: updatedQuestions }
      })
    );
  });
};

export const saveDeckTitle = deckTitle =>
  AsyncStorage.mergeItem(
    CARDS_STORAGE_KEY,
    JSON.stringify({ [deckTitle]: { title: deckTitle, questions: [] } })
  );

export const getDeck = key =>
  AsyncStorage.getItem(CARDS_STORAGE_KEY).then(res => {
    const decks = JSON.parse(res);
    return decks[key];
  });

export const getAllDecks = () =>
  AsyncStorage.getItem(CARDS_STORAGE_KEY).then(res => JSON.parse(res));
