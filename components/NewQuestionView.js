import React from 'react';
import {
  Text,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity
} from 'react-native';
import { addCardToDeck } from '../utils/api';
import { handleUserInput } from '../utils/helpers';

class NewQuestionView extends React.Component {
  state = {
    questionText: 'Please write question here',
    answerText: 'Please write answer here'
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
          onChangeText={text => handleUserInput('questionText', { text })}
        />
        <Text>Answer:</Text>
        <TextInput
          value={answerText}
          multiline={true}
          numberOfLines={6}
          onChangeText={text => handleUserInput('answerText', { text })}
        />
        <TouchableOpacity onPress={this.submit}>
          <Text>SUBMIT</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}

export default NewQuestionView;
