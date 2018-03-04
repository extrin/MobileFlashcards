import React from 'react';
import { StyleSheet, View } from 'react-native';
import MyStatusBar from './components/MyStatusBar';
import { MainNavigator } from './components/Navigation';
import { light_primary_color } from './utils/colors';
import { setLocalNotification } from './utils/helpers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers/index';

export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification();
  }

  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={styles.container}>
          <MyStatusBar
            backgroundColor={light_primary_color}
            barStyle="light-content"
          />
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
