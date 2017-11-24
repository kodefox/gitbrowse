// @flow
import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ActivityIndicator,
  Keyboard,
} from 'react-native';

import UserCard from './components/UserCard';

import type {User} from './rootReducer';

type Props = {
  navigation: Object,
  isLoading: boolean,
  users: Array<User>,
  onSearchSubmit: (username: string) => void,
};
type State = {
  usernameInput: string,
};

export default class SearchScene extends Component<Props, State> {
  state = {
    usernameInput: '',
  };

  render() {
    let {usernameInput} = this.state;
    let {users, isLoading} = this.props;
    let onChangeText = text => {
      let validatedText = text.replace(/[^\w-]/g, '');
      this.setState({usernameInput: text});
    };
    let onSubmit = () => {
      Keyboard.dismiss();
      this.props.onSearchSubmit(usernameInput);
    };
    let onPress = user => {
      this.props.navigation.navigate('UserDetailScene', {user});
    };
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          value={usernameInput}
          onChangeText={onChangeText}
          autoCapitalize="none"
          autoCorrect={false}
          autoFocus={true}
          onSubmitEditing={onSubmit}
          returnKeyType="search"
          underlineColorAndroid="transparent"
        />
        <View style={styles.buttonBar}>
          {isLoading ? <ActivityIndicator /> : null}
          <Button title="Search" onPress={onSubmit} />
        </View>
        <View style={styles.resultList}>
          {users.map(user => (
            <UserCard key={user.id} user={user} onPress={onPress} />
          ))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  titleBar: {
    flexDirection: 'row',
    height: 30,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  buttonBar: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  resultList: {},
  textInput: {
    height: 34,
    paddingHorizontal: 4,
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 2,
    width: '100%',
  },
});
