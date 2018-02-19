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

  submit = () => {
    addCardToDeck(
      this.props.navigation.state.params.deckTitle,
      this.state.questionText,
      this.state.answerText
    );
    this.props.navigation.goBack();
  };

  changeQuestionText = text => this.setState({ questionText: text });

  changeAnswerText = text => this.setState({ answerText: text });

  render() {
    const { questionText, answerText } = this.state;
    return (
      <KeyboardAvoidingView>
        <Text>Question:</Text>
        <TextInput
          value={questionText}
          multiline={true}
          numberOfLines={4}
          onChangeText={text => this.changeQuestionText(text)}
        />
        <Text>Answer:</Text>
        <TextInput
          value={answerText}
          multiline={true}
          numberOfLines={6}
          onChangeText={text => this.changeAnswerText(text)}
        />
        <TouchableOpacity onPress={this.submit}>
          <Text>SUBMIT</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}

export default NewQuestionView;
