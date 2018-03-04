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
import { addDeck } from '../actions';
import { connect } from 'react-redux';

class NewDeckView extends React.Component {
  state = { deckName: '' };

  submit = () => {
    const { deckName } = this.state;
    const { dispatch, navigation } = this.props;
    saveDeckTitle(deckName)
      .then(res => dispatch(addDeck(deckName)))
      .then(navigation.navigate('IndividualDeckView', { deck: deckName }));
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

export default connect()(NewDeckView);
