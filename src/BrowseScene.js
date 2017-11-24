// @flow
import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

type Props = {
  navigation: Object,
};

export default class BrowseScene extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text>Search</Text>
        <Button title="Back" onPress={() => this.props.navigation.goBack()} />
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
