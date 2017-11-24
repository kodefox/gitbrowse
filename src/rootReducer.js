// @flow

export type User = {
  id: number,
  login: string,
  avatar_url: string,
};

type RootState = {
  isLoading: boolean,
  users: Array<User>,
};

type Action = {
  type: 'USERS_RECEIVED',
  users: Array<User>,
};

let initialState = {
  isLoading: false,
  users: [],
};

export default function rootReducer(oldState: RootState, action: Action) {
  if (oldState == null) {
    oldState = initialState;
  }
  if (action.type === 'SEARCH_REQUESTED') {
    return {...oldState, isLoading: true};
  }
  if (action.type === 'USERS_RECEIVED') {
    return {...oldState, users: action.users, isLoading: false};
  }
  return oldState;
}
