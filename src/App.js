// @flow
import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

const HOME = 'home';
const SEARCH = 'search';
const BROWSE = 'browse';

type Props = {};
type State = {
  currentPage: string,
};

export default class App extends Component<Props, State> {
  state = {
    currentPage: HOME,
  };

  render() {
    switch (this.state.currentPage) {
      case HOME: {
        return (
          <View style={styles.container}>
            <Text>Welcome</Text>
            <Button
              title="Search"
              onPress={() => this.setState({currentPage: SEARCH})}
            />
            <Button
              title="Browse"
              onPress={() => this.setState({currentPage: BROWSE})}
            />
          </View>
        );
      }
      case SEARCH: {
        return (
          <View style={styles.container}>
            <Text>Search</Text>
            <Button
              title="Back"
              onPress={() => this.setState({currentPage: HOME})}
            />
          </View>
        );
      }
      case BROWSE: {
        return (
          <View style={styles.container}>
            <Text>Browse</Text>
            <Button
              title="Back"
              onPress={() => this.setState({currentPage: HOME})}
            />
          </View>
        );
      }
      default: {
        throw new Error('Unknown route.');
      }
    }
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
