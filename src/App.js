import React from 'react';
import UserProfile from './components/UserProfile';
import UserList from './components/UserList';

import './App.scss'

function App() {
  return (
    <div className='App'>
      <UserList />
      <UserProfile name="Abner Doubleday" email="abner@mail.com" />
    </div>
  );
}

export default App;
