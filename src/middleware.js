// @flow
import type {DataStore, Action} from './rootReducer';

async function fetchUsers(username) {
  let response = await fetch(
    `https://api.github.com/search/users?q=${username}`,
  );
  return await response.json();
}

let middleware = (store: DataStore) => (next: Function) => (action: Action) => {
  if (action.type === 'SEARCH_REQUESTED') {
    fetchUsers(action.username).then(data => {
      store.dispatch({
        type: 'USERS_RECEIVED',
        users: data.items,
      });
    });
  }
  return next(action);
};

export default middleware;
