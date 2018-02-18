import React from 'react';
import { StyleSheet, View } from 'react-native';
import MyStatusBar from './components/MyStatusBar';
import { MainNavigator } from './components/Navigation';
import { light_primary_color } from './utils/colors';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MyStatusBar
          backgroundColor={light_primary_color}
          barStyle="light-content"
        />
        <MainNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
