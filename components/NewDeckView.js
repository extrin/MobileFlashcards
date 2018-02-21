import React from 'react';
import {
  KeyboardAvoidingContainer,
  PrimaryText,
  ButtonText,
  PrimaryButton,
  PrettyInput
} from './StyledComponents';
import { saveDeckTitle } from '../utils/api';
import { secondary_text_color } from '../utils/colors';

class NewDeckView extends React.Component {
  state = { deckName: '' };

  submit = () => {
    const deckTitle = this.state.deckName;
    saveDeckTitle(deckTitle);
    this.setState({ deckName: '' });
    this.props.navigation.navigate('IndividualDeckView', {
      deck: { title: deckTitle, questions: [] }
    });
  };

  changeDeckName = text => this.setState({ deckName: text });

  render() {
    return (
      <KeyboardAvoidingContainer>
        <PrimaryText>What is the name of your new deck?</PrimaryText>
        <PrettyInput
          value={this.state.deckName}
          placeholder="New Deck"
          placeholderTextColor={secondary_text_color}
          multiline={false}
          onChangeText={text => this.changeDeckName(text)}
        />
        <PrimaryButton onPress={this.submit}>
          <ButtonText>SUBMIT</ButtonText>
        </PrimaryButton>
      </KeyboardAvoidingContainer>
    );
  }
}

export default NewDeckView;
