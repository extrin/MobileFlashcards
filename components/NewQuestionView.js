import React from 'react';
import {
  Text,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity
} from 'react-native';
import { addCardToDeck } from '../utils/api';

class NewQuestionView extends React.Component {
  state = {
    questionText: 'Please write question here',
    answerText: 'Please write answer here'
  };

  handleUserInput = (name, value) => {
    this.setState({ name: value });
  };

  submit = () =>
    addCardToDeck(
      this.props.deckTitle,
      this.state.questionText,
      this.state.answerText
    );

  render() {
    const { questionText, answerText } = this.state;
    return (
      <KeyboardAvoidingView>
        <Text>Question:</Text>
        <TextInput
          value={questionText}
          multiline={true}
          numberOfLines={4}
          onChangeText={text => this.handleUserInput('questionText', { text })}
        />
        <Text>Answer:</Text>
        <TextInput
          value={answerText}
          multiline={true}
          numberOfLines={6}
          onChangeText={text => this.handleUserInput('answerText', { text })}
        />
        <TouchableOpacity onPress={this.submit} />
      </KeyboardAvoidingView>
    );
  }
}

export default NewQuestionView;
