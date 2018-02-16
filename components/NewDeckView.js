import React from 'react';
import {
  Text,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity
} from 'react-native';
import { saveDeckTitle } from '../utils/api';
import { handleUserInput } from '../utils/api';

class NewDeckView extends React.Component {
  state = { deckName: 'New Deck' };

  submit = () => saveDeckTitle(this.state.deckName);

  render() {
    return (
      <KeyboardAvoidingView>
        <Text>What is the name of your new deck?</Text>
        <TextInput
          value={deckName}
          multiline={false}
          onChangeText={text => handleUserInput('deckName', { text })}
        />
        <TouchableOpacity onPress={this.submit}>
          <Text>SUBMIT</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}

export default NewDeckView;
