// @flow

import {reducer} from '../ReduxDemo';

it('should update balance', () => {
  let oldState = {
    balance: 21,
  };
  let action = {
    type: 'DEPOSIT',
    amount: 1,
  };
  let newState = reducer(oldState, action);
  expect(newState).toEqual({balance: 22});
});
