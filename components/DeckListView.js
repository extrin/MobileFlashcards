import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { getAllDecks } from '../utils/api';
import { AppLoading } from 'expo';
import { divider_color } from '../utils/colors';

class DeckListView extends React.Component {
  state = { ready: false, decks: {} };

  componentDidMount() {
    getAllDecks().then(res => this.setState({ ready: true, decks: res }));
  }

  renderItem = ({ item }) => {
    <TouchableOpacity onPress={this.onPressItem}>
      <Text>{item.title}</Text>
      <Text>
        {typeof item.questions === 'undefined' ? 0 : item.questions.length}
        cards
      </Text>
    </TouchableOpacity>;
  };

  renderItemSeparator = () => {
    <View
      style={{
        height: 1,
        width: '86%',
        backgroundColor: divider_color,
        marginLeft: '14%'
      }}
    />;
  };

  onPressItem = () => {
    //TODO: Go to individual deck view when pressing item
  };

  render() {
    const { ready } = this.state;

    if (!ready) return <AppLoading />;

    const { decks } = this.state;

    if (!decks)
      return (
        <View>
          <Text>There are no decks created. Create one now!</Text>
        </View>
      );
    console.log(decks);
    const data = Object.values(decks);
    console.log(data);

    return (
      <View>
        <FlatList
          data={data}
          renderItem={this.renderItem}
          ItemSeparatorComponent={this.renderItemSeparator}
          keyExtractor={item => item.title}
        />
      </View>
    );
  }
}

export default DeckListView;
