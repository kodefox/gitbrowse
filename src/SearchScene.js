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
import {ROUTES} from './lib/constants';

export type UserSummary = {
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
  users: Array<UserSummary>,
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
        <View style={styles.titleBar}>
          <Text style={styles.titleText}>Github User Search</Text>
          {isLoading ? <ActivityIndicator /> : null}
        </View>
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
          <Button
            title="Back"
            onPress={() => this.props.navigate(ROUTES.HOME)}
          />
          <Button title="Search" onPress={onSubmit} />
        </View>
        <View style={styles.resultList}>
          {users.map(user => <UserCard key={user.id} user={user} />)}
        </View>
      </View>
    );
  }

  async _fetchUsers() {
    let username = this.state.usernameInput;
    this.setState({
      users: [],
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
