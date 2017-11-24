// @flow
import {connect} from 'react-redux';
import SearchScene from './SearchScene';

function mapStateToProps(state) {
  return {
    isLoading: state.isLoading,
    users: state.users,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onSearchSubmit(username) {
      dispatch({
        type: 'SEARCH_REQUESTED',
        username,
      });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchScene);
