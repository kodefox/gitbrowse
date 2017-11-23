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

import {ROUTES} from './lib/constants';

type User = {
  id: number,
  login: string,
  score: number,
  avatar_url: string,
};
type Props = {
  navigate: (page: string) => void,
};
type State = {
  usernameInput: string,
  users: Array<User>,
  isLoading: boolean,
};

export default class SearchScene extends Component<Props, State> {
  state = {
    usernameInput: '',
    users: [],
    isLoading: false,
  };

  render() {
    let {usernameInput, isLoading, users} = this.state;
    let onChangeText = text => {
      let validatedText = text.replace(/[^\w-]/g, '');
      this.setState({usernameInput: text});
    };
    let onSubmit = () => {
      Keyboard.dismiss();
      this._fetchUsers();
    };
    return (
      <View style={styles.container}>
        <View style={{flexDirection: 'row'}}>
          <Text>Search</Text>
          {isLoading ? <ActivityIndicator /> : null}
        </View>
        <TextInput
          style={styles.textInput}
          value={usernameInput}
          onChangeText={onChangeText}
        />
        <View style={styles.buttonBar}>
          <Button
            title="Back"
            onPress={() => this.props.navigate(ROUTES.HOME)}
          />
          <Button title="Submit" onPress={onSubmit} />
        </View>
        <View style={styles.resultList}>
          {users.map(user => (
            <View key={user.id}>
              <Text>{user.login}</Text>
            </View>
          ))}
        </View>
      </View>
    );
  }

  async _fetchUsers() {
    let username = this.state.usernameInput;
    this.setState({
      isLoading: true,
    });
    let response = await fetch(
      `https://api.github.com/search/users?q=${username}`,
    );
    let data = await response.json();
    this.setState({
      users: data.items,
      isLoading: false,
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  buttonBar: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  resultList: {},
  textInput: {
    height: 30,
    paddingHorizontal: 4,
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 2,
    width: '100%',
  },
});
