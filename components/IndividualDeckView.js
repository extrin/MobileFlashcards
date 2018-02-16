import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { getDeck } from '../utils/api';

class IndividualDeckView extends React.Component {
  onAddCard = () => {
    //TODO: Add Card
  };

  onStartQuiz = () => {
    //TODO: Start Quiz
  };

  render() {
    const { deck } = this.props;
    return (
      <View>
        <Text>{deck.title}</Text>
        <Text>{deck.questions.length} cards</Text>
        <TouchableOpacity onPress={this.onAddCard}>
          <Text>Add Card</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.onStartQuiz}>
          <Text>Start Quiz</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
