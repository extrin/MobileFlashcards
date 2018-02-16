import React from 'react';
import { TabNavigator } from 'react-navigation';
import DeckListView from './DeckListView';
import NewDeckView from './NewDeckView';
import { light_primary_color, accent_color } from '../utils/colors';

const TabNav = TabNavigator(
  {
    DeckListView: {
      screen: DeckListView,
      navigationOptions: {
        tabBarLabel: 'DECKS'
      }
    },
    NewDeckView: {
      screen: NewDeckView,
      navigationOptions: {
        tabBarLabel: 'NEW DECK'
      }
    }
  },
  {
    navigationOptions: {
      header: null
    },
    tabBarOptions: { activeTintColor: accent_color },
    style: { backgroundColor: light_primary_color }
  }
);
