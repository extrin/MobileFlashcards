import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { getAllDecks } from '../utils/api';
import { AppLoading } from 'expo';

class DeckListView extends React.Component {
  state = { ready: false, decks: {} };

  componentDidMount() {
    getAllDecks().then(res => this.setState({ ready: true, decks: res }));
  }

  renderItem = ({ item }) => {
    <TouchableOpacity onPress={this.onPressItem}>
      <Text>{item.title}</Text>
      <Text>{item.questions.length} cards</Text>
    </TouchableOpacity>;
  };

  renderItemSeparator = () => {
    //TODO: Render item separator
  };

  onPressItem = () => {
    //TODO: Go to individual deck view when pressing item
  };

  render() {
    const { ready } = this.state;

    if (!ready) return <AppLoading />;

    const { decks } = this.state;
    const data = Object.values(decks);

    return (
      <View>
        <FlatList
          data={[data]}
          renderItem={this.renderItem}
          ItemSeparatorComponent={this.renderItemSeparator}
        />
      </View>
    );
  }
}

export default DeckListView;
