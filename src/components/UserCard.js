// @flow
import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

import type {User as UserSummary} from '../rootReducer';

type Props = {
  user: UserSummary,
  onPress: (user: UserSummary) => void,
};

export default function UserCard(props: Props) {
  let {user, onPress} = props;
  return (
    <TouchableOpacity onPress={() => onPress(user)}>
      <View style={styles.container}>
        <Image style={styles.avatar} source={{uri: user.avatar_url}} />
        <Text>{user.login}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#aaa',
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
    borderWidth: 2,
    borderColor: '#aaa',
  },
});
