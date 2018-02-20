import React from 'react';
import {
  Container,
  PrimaryText,
  SecondaryText,
  SecondaryButton,
  ButtonText,
  CorrectButton,
  IncorrectButton,
  AccentButton
} from './StyledComponents';

class QuizView extends React.Component {
  state = {
    mode: 'question',
    correctAnswers: 0,
    currentQuestion: '',
    currentAnswer: '',
    currentIndex: 0
  };

  static navigationOptions = ({ navigation }) => {
    const { deck } = navigation.state.params;
    if (!deck) return { title: 'DeckTitle - Quiz' };
    return { title: `${deck.title} - Quiz` };
  };

  componentDidMount() {
    const { deck } = this.props.navigation.state.params;

    this.setState({
      currentQuestion: deck.questions[0].question,
      currentAnswer: deck.questions[0].answer
    });
  }

  changeMode = () => {
    this.state.mode === 'question'
      ? this.setState({ mode: 'answer' })
      : this.setState({ mode: 'question' });
  };

  onIncorrectPress = () => {
    const { deck } = this.props.navigation.state.params;
    questionsCount = deck.questions.length;
    nextIndex = this.state.currentIndex + 1;
    if (nextIndex >= questionsCount) {
      this.props.navigation.navigate('QuizResultView', {
        questionsCount: questionsCount,
        correctCount: this.state.correctAnswers + 1
      });
    } else {
      this.setState({
        currentIndex: nextIndex,
        currentAnswer: deck.questions[nextIndex].answer,
        currentQuestion: deck.questions[nextIndex].question
      });
    }
  };

  onCorrectPress = () => {
    const correctCount = this.state.correctAnswers + 1;
    this.setState({ correctAnswers: correctCount });
    this.onIncorrectPress();
  };

  render() {
    const { currentAnswer, currentQuestion, mode } = this.state;
    return (
      <Container>
        <PrimaryText>
          {mode === 'question' ? currentQuestion : currentAnswer}
        </PrimaryText>
        <AccentButton onPress={this.changeMode}>
          <SecondaryText>
            {mode === 'question' ? 'Answer' : 'Question'}
          </SecondaryText>
        </AccentButton>
        <CorrectButton onPress={this.onCorrectPress}>
          <ButtonText>Correct</ButtonText>
        </CorrectButton>
        <IncorrectButton onPress={this.onIncorrectPress}>
          <ButtonText>Incorrect</ButtonText>
        </IncorrectButton>
      </Container>
    );
  }
}

export default QuizView;
