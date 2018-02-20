import React from 'react';
import {
  Container,
  PrimaryText,
  SecondaryText,
  ButtonText,
  PrimaryButton,
  SecondaryButton
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
        <SecondaryButton onPress={this.onAddCard}>
          <ButtonText>Add Card</ButtonText>
        </SecondaryButton>
        <PrimaryButton onPress={this.onStartQuiz}>
          <ButtonText>Start Quiz</ButtonText>
        </PrimaryButton>
      </Container>
    );
  }
}

export default IndividualDeckView;
