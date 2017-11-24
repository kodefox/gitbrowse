// @flow
export type DataStore = {
  dispatch: (action: Action) => void,
};

export type User = {
  id: number,
  login: string,
  avatar_url: string,
};

export type RootState = {
  isLoading: boolean,
  users: Array<User>,
};

export type Action =
  | {
      type: 'USERS_RECEIVED',
      users: Array<User>,
    }
  | {
      type: 'SEARCH_REQUESTED',
      username: string,
    };

let initialState = {
  isLoading: false,
  users: [],
};

export default function rootReducer(
  oldState: RootState,
  action: Action,
): RootState {
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
