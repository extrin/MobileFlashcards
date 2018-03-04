import React from 'react';
import {
  Container,
  PrimaryText,
  SecondaryText,
  ButtonText,
  FunnyText,
  PrimaryButton,
  AccentButton
} from './StyledComponents';
import { getDeck } from '../utils/api';
import { connect } from 'react-redux';

class IndividualDeckView extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { deck } = navigation.state.params;
    if (!deck) return { title: 'DeckTitle' };
    return { title: deck };
  };

  onAddCard = deckTitle => {
    const { navigation } = this.props;
    navigation.navigate('NewQuestionView', {
      deck: deckTitle
    });
  };

  onStartQuiz = deckTitle => {
    const { navigation } = this.props;
    navigation.navigate('QuizView', { deck: deckTitle });
  };

  render() {
    const { deck } = this.props;

    if (!deck)
      return (
        <Container>
          <SecondaryText>No deck!</SecondaryText>
        </Container>
      );

    return (
      <Container>
        <PrimaryText>{deck.title}</PrimaryText>
        <SecondaryText>{deck.questions.length} cards</SecondaryText>
        <AccentButton
          onPress={() => {
            this.onAddCard(deck.title);
          }}
        >
          <FunnyText>Add Card</FunnyText>
        </AccentButton>
        <PrimaryButton
          onPress={() => {
            this.onStartQuiz(deck.title);
          }}
        >
          <ButtonText>Start Quiz</ButtonText>
        </PrimaryButton>
      </Container>
    );
  }
}

function mapStateToProps({ decks }, props) {
  const { deck } = props.navigation.state.params;
  return {
    deck: decks[deck]
  };
}

export default connect(mapStateToProps)(IndividualDeckView);
