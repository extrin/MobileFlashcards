import React from 'react';
import {
  Container,
  PrimaryText,
  SecondaryText,
  PrimaryButton,
  ButtonText,
  FunnyText,
  AccentButton
} from './StyledComponents';

class QuizResultView extends React.Component {
  render() {
    const {
      questionsCount,
      correctCount,
      deck
    } = this.props.navigation.state.params;

    const percentageCorrect = correctCount / questionsCount * 100;
    return (
      <Container>
        <PrimaryText>Congrats!</PrimaryText>
        <PrimaryText>You finished this quiz!</PrimaryText>
        <SecondaryText>
          Your result: {percentageCorrect}% of correct answers!
        </SecondaryText>
        <PrimaryButton
          onPress={() =>
            this.props.navigation.navigate('IndividualDeckView', { deck: deck })
          }
        >
          <ButtonText>GO BACK</ButtonText>
        </PrimaryButton>
        <AccentButton
          onPress={() =>
            this.props.navigation.navigate('QuizView', { deck: deck })
          }
        >
          <FunnyText>RESTART QUIZ</FunnyText>
        </AccentButton>
      </Container>
    );
  }
}

export default QuizResultView;
