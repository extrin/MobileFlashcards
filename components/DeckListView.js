import React from 'react';
import { View, FlatList } from 'react-native';
import {
  PrimaryText,
  SecondaryText,
  ButtonText,
  TouchableContainer,
  Container,
  PrimaryButton
} from './StyledComponents';
import { getAllDecks } from '../utils/api';
import { AppLoading } from 'expo';
import { divider_color } from '../utils/colors';

class DeckListView extends React.Component {
  state = { ready: false, decks: {} };

  componentDidMount() {
    getAllDecks().then(res => this.setState({ ready: true, decks: res }));
  }

  refreshView = () => {
    this.setState({ ready: false });
    getAllDecks().then(res => this.setState({ ready: true, decks: res }));
  };

  renderItem = ({ item }) => {
    return (
      <TouchableContainer
        onPress={() => {
          this.props.navigation.navigate('IndividualDeckView', {
            deck: item
          });
        }}
      >
        <PrimaryText>{item.title}</PrimaryText>
        <SecondaryText>{item.questions.length} cards</SecondaryText>
      </TouchableContainer>
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
        <Container>
          <PrimaryText>There are no decks created. Create one now!</PrimaryText>
          <PrimaryButton onPress={this.refreshView}>
            <ButtonText>Refresh</ButtonText>
          </PrimaryButton>
        </Container>
      );

    const data = Object.values(decks);

    return (
      <Container>
        <PrimaryButton onPress={this.refreshView}>
          <ButtonText>Refresh</ButtonText>
        </PrimaryButton>
        <FlatList
          data={data}
          renderItem={this.renderItem}
          ItemSeparatorComponent={this.renderItemSeparator}
          keyExtractor={item => item.title}
          style={{ width: '100%' }}
        />
      </Container>
    );
  }
}

export default DeckListView;
