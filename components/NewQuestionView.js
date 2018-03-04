import React from 'react';
import {
  KeyboardAvoidingContainer,
  PrimaryText,
  ButtonText,
  PrimaryButton,
  PrettyInput
} from './StyledComponents';
import { addCardToDeck } from '../utils/api';
import { secondary_text_color } from '../utils/colors';
import { addQuestion } from '../actions';
import { connect } from 'react-redux';

class NewQuestionView extends React.Component {
  state = {
    questionText: '',
    answerText: ''
  };

  submit = () => {
    const { navigation, dispatch, deck } = this.props;
    const { questionText, answerText } = this.state;

    addCardToDeck(deck.title, questionText, answerText);
    dispatch(addQuestion(deck.title, questionText, answerText));
    navigation.goBack();
  };

  changeQuestionText = text => this.setState({ questionText: text });

  changeAnswerText = text => this.setState({ answerText: text });

  render() {
    const { questionText, answerText } = this.state;
    return (
      <KeyboardAvoidingContainer>
        <PrimaryText>Question:</PrimaryText>
        <PrettyInput
          value={questionText}
          placeholder="Please write your question here"
          placeholderTextColor={secondary_text_color}
          multiline={true}
          numberOfLines={4}
          onChangeText={text => this.changeQuestionText(text)}
        />
        <PrimaryText>Answer:</PrimaryText>
        <PrettyInput
          value={answerText}
          placeholder="Please write your answer here"
          placeholderTextColor={secondary_text_color}
          multiline={true}
          numberOfLines={6}
          onChangeText={text => this.changeAnswerText(text)}
        />
        <PrimaryButton onPress={() => this.submit()}>
          <ButtonText>SUBMIT</ButtonText>
        </PrimaryButton>
      </KeyboardAvoidingContainer>
    );
  }
}

function mapStateToProps(state, props) {
  const { deck } = props.navigation.state.params;
  return {
    deck: state[deck]
  };
}

export default connect(mapStateToProps)(NewQuestionView);
