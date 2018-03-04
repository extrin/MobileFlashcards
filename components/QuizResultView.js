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
import { connect } from 'react-redux';
import { nullCorrectAnswers } from '../actions/correctAnswers';

class QuizResultView extends React.Component {
  goBack = fromWhere => {
    const { dispatch, navigation } = this.props;

    navigation.goBack(fromWhere);
    dispatch(nullCorrectAnswers());
  };

  render() {
    const { navigation, correctAnswers } = this.props;
    const { questionsCount, deck, key } = navigation.state.params;

    const percentageCorrect = Math.round(correctAnswers / questionsCount * 100);

    return (
      <Container>
        <PrimaryText>Congrats!</PrimaryText>
        <PrimaryText>You finished this quiz!</PrimaryText>
        <SecondaryText>
          Your result: {percentageCorrect} % of correct answers!
        </SecondaryText>
        <PrimaryButton onPress={() => this.goBack(key)}>
          <ButtonText>GO BACK</ButtonText>
        </PrimaryButton>
        <AccentButton onPress={() => this.goBack(navigation.state.key)}>
          <FunnyText>RESTART QUIZ</FunnyText>
        </AccentButton>
      </Container>
    );
  }
}

function mapStateToProps({ correctAnswers }) {
  return { correctAnswers };
}

export default connect(mapStateToProps)(QuizResultView);
