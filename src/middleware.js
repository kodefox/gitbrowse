// @flow

async function fetchUsers(username) {
  let response = await fetch(
    `https://api.github.com/search/users?q=${username}`,
  );
  return await response.json();
}

// $FlowFixMe
let middleware = store => next => action => {
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
