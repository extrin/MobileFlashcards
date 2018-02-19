import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import DeckListView from './DeckListView';
import NewDeckView from './NewDeckView';
import IndividualDeckView from './IndividualDeckView';
import QuizView from './QuizView';
import NewQuestionView from './NewQuestionView';
import QuizResultView from './QuizResultView';
import {
  dark_primary_color,
  accent_color,
  light_primary_color
} from '../utils/colors';

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
    navigationOptions: { header: null },
    tabBarOptions: {
      style: {
        backgroundColor: dark_primary_color
      },
      activeTintColor: accent_color,
      inactiveTintColor: light_primary_color
    }
  }
);

export const MainNavigator = StackNavigator({
  Home: { screen: TabNav },
  IndividualDeckView: {
    screen: IndividualDeckView,
    navigationOptions: {
      headerTintColor: accent_color,
      headerStyle: {
        backgroundColor: dark_primary_color
      }
    }
  },
  NewQuestionView: {
    screen: NewQuestionView,
    navigationOptions: {
      title: 'New Question',
      headerTintColor: accent_color,
      headerStyle: {
        backgroundColor: dark_primary_color
      }
    }
  },
  QuizView: {
    screen: QuizView,
    navigationOptions: {
      headerTintColor: accent_color,
      headerStyle: {
        backgroundColor: dark_primary_color
      }
    }
  },
  QuizResultView: {
    screen: QuizResultView,
    navigationOptions: {
      title: 'Quiz Result',
      headerTintColor: accent_color,
      headerStyle: {
        backgroundColor: dark_primary_color
      }
    }
  }
});
