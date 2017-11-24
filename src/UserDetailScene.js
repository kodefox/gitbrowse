// @flow
import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

import type {User} from './rootReducer';

type Props = {
  user: User,
  navigation: Object,
};

export default function UserDetailScene(props: Props) {
  let {user} = props.navigation.state.params;
  return (
    <View style={styles.container}>
      <Text>Username: {user.login}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
