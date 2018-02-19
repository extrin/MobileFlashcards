import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class QuizResultView extends React.Component {
  render() {
    const { questionsCount, correctCount } = this.props.navigation.state.params;
    const percentageCorrect = correctCount / questionsCount * 100;
    return (
      <View>
        <Text>Congrats! You finished this quiz!</Text>
        <Text>Your result: {percentageCorrect} % of correct answers!</Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Home')}
        >
          <Text>GO HOME</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default QuizResultView;
