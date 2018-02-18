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
    return (
      <TouchableOpacity
        onPress={() => {
          console.log(item);
          this.props.navigation.navigate('IndividualDeckView', {
            deck: item
          });
        }}
      >
        <Text>{item.title}</Text>
        <Text>{item.questions.length}</Text>
      </TouchableOpacity>
    );
  };

  renderItemSeparator = () => (
    <View
      style={{
        height: 1,
        backgroundColor: divider_color
      }}
    />
  );

  render() {
    const { ready, decks } = this.state;

    if (!ready) return <AppLoading />;

    if (!decks)
      return (
        <View>
          <Text>There are no decks created. Create one now!</Text>
        </View>
      );

    const data = Object.values(decks);

    return (
      <View style={{ flex: 1 }}>
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
