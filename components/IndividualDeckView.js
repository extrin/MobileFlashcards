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

class IndividualDeckView extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { deck } = navigation.state.params;
    if (!deck) return { title: 'DeckTitle' };
    return { title: deck.title };
  };

  onAddCard = () => {
    const { deck } = this.props.navigation.state.params;
    this.props.navigation.navigate('NewQuestionView', {
      deckTitle: deck.title
    });
  };

  onStartQuiz = () => {
    const { deck } = this.props.navigation.state.params;
    this.props.navigation.navigate('QuizView', { deck: deck });
  };

  render() {
    const { deck } = this.props.navigation.state.params;

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
        <AccentButton onPress={this.onAddCard}>
          <FunnyText>Add Card</FunnyText>
        </AccentButton>
        <PrimaryButton onPress={this.onStartQuiz}>
          <ButtonText>Start Quiz</ButtonText>
        </PrimaryButton>
      </Container>
    );
  }
}

export default IndividualDeckView;
