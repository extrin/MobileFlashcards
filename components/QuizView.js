import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

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

  renderText = () => {
    this.state.mode === 'question' ? (
      <Text>{this.state.currentQuestion}</Text>
    ) : (
      <Text>{this.state.currentAnswer}</Text>
    );
  };

  changeMode = () => {
    this.state.mode === 'question'
      ? this.setState({ mode: 'answer' })
      : this.setState({ mode: 'question' });
  };

  renderOption = () => {
    this.state.mode === 'question' ? 'Answer' : 'Question';
  };

  onIncorrectPress = () => {
    const { deck } = this.props.navigation.state.params;
    questionsCount = deck.questions.length;
    nextIndex = this.state.currentIndex + 1;
    if (nextIndex >= questionsCount) {
      this.props.navigation.navigate('QuizResultView', {
        questionsCount: questionsCount,
        correctCount: this.state.correctAnswers
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
    this.setState({ correctAnswers: this.state.correctAnswers + 1 });
    this.onIncorrectPress();
  };

  render() {
    return (
      <View>
        {this.renderText}
        <Text onPress={this.changeMode}>{this.renderOption}</Text>
        <TouchableOpacity onPress={this.onCorrectPress}>
          <Text>Correct</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.onIncorrectPress}>
          <Text>Incorrect</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default QuizView;
