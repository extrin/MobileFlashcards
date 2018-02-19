import React from 'react';
import {
  Text,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity
} from 'react-native';
import { saveDeckTitle } from '../utils/api';

class NewDeckView extends React.Component {
  state = { deckName: 'New Deck' };

  submit = () => {
    saveDeckTitle(this.state.deckName);
    this.setState({ deckName: 'New Deck' });
  };

  changeDeckName = text => this.setState({ deckName: text });

  render() {
    return (
      <KeyboardAvoidingView>
        <Text>What is the name of your new deck?</Text>
        <TextInput
          value={this.state.deckName}
          multiline={false}
          onChangeText={text => this.changeDeckName(text)}
        />
        <TouchableOpacity onPress={this.submit}>
          <Text>SUBMIT</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}

export default NewDeckView;
