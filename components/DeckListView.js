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
import { loadDecks } from '../actions';
import { connect } from 'react-redux';

class DeckListView extends React.Component {
  state = { ready: false };

  componentDidMount() {
    const { dispatch } = this.props;
    getAllDecks()
      .then(res => dispatch(loadDecks(res)))
      .then(this.setState({ ready: true }));
  }

  renderItem = ({ item }) => {
    return (
      <TouchableContainer
        onPress={() => {
          this.props.navigation.navigate('IndividualDeckView', {
            deck: item.title
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
    const { ready } = this.state;
    const { decks } = this.props;

    if (!ready) return <AppLoading />;

    if (!decks)
      return (
        <Container>
          <PrimaryText>There are no decks created. Create one now!</PrimaryText>
        </Container>
      );

    const data = Object.values(decks);

    return (
      <Container>
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

function mapStateToProps(decks) {
  return { decks };
}

export default connect(mapStateToProps)(DeckListView);
