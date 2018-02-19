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
    console.log('component did mount');
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
    return (
      <View>
        {this.state.mode === 'question' ? (
          <Text>{this.state.currentQuestion}</Text>
        ) : (
          <Text>{this.state.currentAnswer}</Text>
        )}
        <TouchableOpacity onPress={this.changeMode}>
          <Text>{this.state.mode === 'question' ? 'Answer' : 'Question'}</Text>
        </TouchableOpacity>
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
