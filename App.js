import React from 'react';
import { StyleSheet, View } from 'react-native';
import MyStatusBar from './components/MyStatusBar';
import { TabNav } from './components/Navigation';
import { light_primary_color } from './utils/colors';

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <MyStatusBar
          backgroundColor={light_primary_color}
          barStyle="light-content"
        />
        <TabNav />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
