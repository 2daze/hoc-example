import React from 'react';
import withData from './hoc/withData';

const UserList = ({ data }) => {
  const userList = data.map(user => {
      return (
        <div className="post" key={user.id}>
          <h1>{user.name}</h1>
          <p>{user.email}</p>
        </div>
      );
  });

  return (
    <div className="container user-list">
      <h1>User List</h1>
      <h2>(All Users)</h2>
      {userList}
    </div>
  );
}

export default withData(UserList, "https://jsonplaceholder.typicode.com/users");
