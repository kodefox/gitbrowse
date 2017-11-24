// @flow
import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, BackHandler} from 'react-native';
import {Provider} from 'react-redux';
import {StackNavigator} from 'react-navigation';
import HomeScene from './HomeScene';
import SearchScene from './SearchScene-container';
import BrowseScene from './BrowseScene';
import UserDetailScene from './UserDetailScene';
import dataStore from './dataStore';

type Props = {};

let Main = StackNavigator({
  HomeScene: {
    screen: HomeScene,
  },
  SearchScene: {
    screen: SearchScene,
    navigationOptions: () => {
      return {title: 'Search Github Users'};
    },
  },
  UserDetailScene: {
    screen: UserDetailScene,
    navigationOptions: () => {
      return {title: 'User Details'};
    },
  },
  BrowseScene: {
    screen: BrowseScene,
  },
});

export default class App extends Component<Props> {
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this._onBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this._onBackPress);
  }

  _onBackPress = () => {
    // TODO: Fix this.
  };

  render() {
    return (
      <Provider store={dataStore}>
        <Main />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
