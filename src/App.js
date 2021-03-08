import React from 'react';
import UserProfile from './components/UserProfile';

import './App.scss'

function App() {
  return (
    <div className='App'>
      <UserProfile name="Abner" email="abner@mail.com" />
    </div>
  );
}

export default App;
