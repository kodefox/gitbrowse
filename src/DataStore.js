// @flow

class DataStore {
  state: Object;
  reducer: Function;

  constructor(initialState: Object, reducer: Function) {
    this.state = initialState;
    this.reducer = reducer;
  }

  dispatch(action: Object) {
    let oldState = this.state;
    this.state = this.reducer(oldState, action);
  }

  getState() {
    return this.state;
  }
}

export default DataStore;
