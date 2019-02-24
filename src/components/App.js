/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import UserList from '../containers/user-list';
import UserDetail from '../containers/user-detail';
import './style.scss';

const App = () => (
  <div>
    <h2>User List</h2>
    <UserList />
    <hr />
    <h2>User Details</h2>
    <UserDetail />
  </div>
);

export default App;
