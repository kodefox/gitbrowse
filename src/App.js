// @flow
import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, BackHandler} from 'react-native';
import {StackNavigator} from 'react-navigation';
import HomeScene from './HomeScene';
import SearchScene from './SearchScene';
import BrowseScene from './BrowseScene';
import UserDetailScene from './UserDetailScene';

import {ROUTES} from './lib/constants';

type Props = {};
type State = {
  currentPage: string,
};

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

export default class App extends Component<Props, State> {
  state = {
    currentPage: ROUTES.HOME,
  };

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this._onBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this._onBackPress);
  }

  _onBackPress = () => {
    if (this.state.currentPage === ROUTES.HOME) {
      return false;
    } else {
      this.setState({currentPage: ROUTES.HOME});
      return true;
    }
  };

  render() {
    return <Main />;
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
