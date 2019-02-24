/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ActionCreators from '../actions/index';

class UserList extends Component {
  createListItems() {
    return this.props.users.map(user => (
      <li
        key={user.id}
        onClick={() => { this.props.actions.selectUser(user); }}
      >
        {user.first}
        {' '}
        {user.last}
      </li>
    ));
  }

  render() {
    return (
      <ul>
        {this.createListItems()}
      </ul>
    );
  }
}
// pass into your component as a property

function mapStateToProps(state) {
  return {
    users: state.users,
  };
}
// dispatch==call function
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(ActionCreators, dispatch),
  };
}
// коннектим к store state-это наше хранилище
export default connect(mapStateToProps, mapDispatchToProps)(UserList);
