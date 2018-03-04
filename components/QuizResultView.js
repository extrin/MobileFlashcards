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
    const { navigation } = this.props;
    const { questionsCount, correctCount, deck, key } = navigation.state.params;

    const percentageCorrect = Math.round(correctCount / questionsCount * 100);

    return (
      <Container>
        <PrimaryText>Congrats!</PrimaryText>
        <PrimaryText>You finished this quiz!</PrimaryText>
        <SecondaryText>
          Your result: {percentageCorrect} % of correct answers!
        </SecondaryText>
        <PrimaryButton onPress={() => navigation.goBack(key)}>
          <ButtonText>GO BACK</ButtonText>
        </PrimaryButton>
        <AccentButton onPress={() => navigation.goBack(navigation.state.key)}>
          <FunnyText>RESTART QUIZ</FunnyText>
        </AccentButton>
      </Container>
    );
  }
}

export default QuizResultView;
