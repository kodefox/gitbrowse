// @flow
import DataStore from './DataStore';

let initialState = {
  balance: 0,
};

export let reducer = (oldState: Object, action: Object) => {
  if (action.type === 'DEPOSIT') {
    return {balance: oldState.balance + action.amount};
  }
  if (action.type === 'WITHDRAWAL') {
    return {balance: oldState.balance - action.amount};
  }
  return oldState;
};

let dataStore = new DataStore(initialState, reducer);

// Examples:

dataStore.dispatch({
  type: 'DEPOSIT',
  amount: 10,
});

dataStore.dispatch({
  type: 'WITHDRAWAL',
  amount: 3,
});

console.log(dataStore.getState());
