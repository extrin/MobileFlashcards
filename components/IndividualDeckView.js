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
  state = { deck: this.props.navigation.state.params.deck };

  static navigationOptions = ({ navigation }) => {
    const { deck } = navigation.state.params;
    if (!deck) return { title: 'DeckTitle' };
    return { title: deck.title };
  };

  onAddQuestion = title => {
    const { navigation } = this.props;
    getDeck(title).then(res => {
      navigation.setParams({ deck: res });
      this.setState({ deck: res });
    });
    console.log('onQuestionAdd');
  };

  onAddCard = () => {
    const { navigation } = this.props;
    const { deck } = this.state;
    navigation.navigate('NewQuestionView', {
      deckTitle: deck.title,
      onAddQuestion: this.onAddQuestion
    });
  };

  onStartQuiz = () => {
    const { navigation } = this.props;
    const { deck } = this.state;
    getDeck(deck.title).then(res => {
      navigation.navigate('QuizView', { deck: res });
    });
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
