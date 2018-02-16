import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class QuizView extends React.Component {
  state = { mode: 'question' };

  renderText = () => {
    this.state.mode === 'question' ? (
      <Text>{this.props.question}</Text>
    ) : (
      <Text>{this.props.answer}</Text>
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

  render() {
    return (
      <View>
        {this.renderText}
        <Text onPress={this.changeMode}>{this.renderOption}</Text>
        <TouchableOpacity onPress={this.props.onCorrectPress}>
          <Text>Correct</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.props.onIncorrectPress}>
          <Text>Incorrect</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default QuizView;
