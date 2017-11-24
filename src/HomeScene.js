// @flow
import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

type Props = {
  navigation: Object,
};

export default class HomeScene extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome</Text>
        <Button
          title="Search"
          onPress={() => this.props.navigation.navigate('SearchScene')}
        />
        <Button
          title="Browse"
          onPress={() => this.props.navigation.navigate('BrowseScene')}
        />
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
