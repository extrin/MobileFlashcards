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
import { setLocalNotification, clearLocalNotification } from '../utils/helpers';
import { connect } from 'react-redux';

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
    return { title: `${deck} - Quiz` };
  };

  componentDidMount() {
    const { deck } = this.props;

    clearLocalNotification().then(setLocalNotification());

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
    const { navigation, deck } = this.props;
    const questionsCount = deck.questions.length;
    const nextIndex = this.state.currentIndex + 1;
    if (nextIndex >= questionsCount) {
      navigation.navigate('QuizResultView', {
        questionsCount: questionsCount,
        correctCount: this.state.correctAnswers,
        deck: deck.title,
        key: navigation.state.key
      });
      this.setState({
        mode: 'question',
        correctAnswers: 0,
        currentQuestion: deck.questions[0].question,
        currentAnswer: deck.questions[0].answer,
        currentIndex: 0
      });
    } else {
      this.setState(prevState => {
        return {
          currentIndex: prevState.currentIndex + 1,
          currentAnswer: deck.questions[prevState.currentIndex + 1].answer,
          currentQuestion: deck.questions[prevState.currentIndex + 1].question
        };
      });
    }
  };

  onCorrectPress = () => {
    this.setState(prevState => {
      return { correctAnswers: prevState.correctAnswers + 1 };
    });
    this.onIncorrectPress();
  };

  render() {
    const { currentAnswer, currentQuestion, mode, currentIndex } = this.state;
    const { navigation, deck } = this.props;
    const questionsCount = deck.questions.length;
    return (
      <Container>
        <SecondaryText>
          {currentIndex + 1}/{questionsCount}
        </SecondaryText>
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

function mapStateToProps(state, props) {
  const { deck } = props.navigation.state.params;
  return {
    deck: state[deck]
  };
}

export default connect(mapStateToProps)(QuizView);
