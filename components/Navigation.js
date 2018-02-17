import React from 'react';
import { TabNavigator } from 'react-navigation';
import DeckListView from './DeckListView';
import NewDeckView from './NewDeckView';
import {
  dark_primary_color,
  accent_color,
  secondary_text_color
} from '../utils/colors';

export const TabNav = TabNavigator(
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
      tabBarOptions: {
        style: { backgroundColor: dark_primary_color },
        activeTintColor: accent_color,
        inActiveTintColor: secondary_text_color
      }
    }
  }
);
