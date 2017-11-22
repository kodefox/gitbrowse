// @flow
import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

import {ROUTES} from './lib/constants';

type Props = {
  navigate: (page: string) => void,
};

export default class SearchScene extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text>Search</Text>
        <Button title="Back" onPress={() => this.props.navigate(ROUTES.HOME)} />
      </View>
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
