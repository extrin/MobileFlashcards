import React from 'react';
import {
  Container,
  PrimaryText,
  SecondaryText,
  PrimaryButton,
  ButtonText
} from './StyledComponents';

class QuizResultView extends React.Component {
  render() {
    const { questionsCount, correctCount } = this.props.navigation.state.params;

    const percentageCorrect = correctCount / questionsCount * 100;

    return (
      <Container>
        <PrimaryText>Congrats! You finished this quiz!</PrimaryText>
        <SecondaryText>
          Your result: {percentageCorrect} % of correct answers!
        </SecondaryText>
        <PrimaryButton onPress={() => this.props.navigation.navigate('Home')}>
          <ButtonText>GO HOME</ButtonText>
        </PrimaryButton>
      </Container>
    );
  }
}

export default QuizResultView;
